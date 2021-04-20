import * as React from "react";
import { axiosCall } from "../../../utilities/helpers/axiosCall";

export interface ApplicationStateDef {
    fileName: undefined | string;
    fileId: undefined | number;
    uploadProgress: number;
    theFile: File | undefined;
    fileUploadError: string;
    current: number;
}

interface Action {
    name: string;
    value: any;
}

export const useAppState = () => {
    const [appState, setAppState] = React.useState<ApplicationStateDef>({
        uploadProgress: 0,
        fileName: undefined,
        fileId: undefined,
        theFile: undefined,
        fileUploadError: "",
        current: 1,
    });

    const changeTheFile = (file: File) => {
        setAppState({ ...appState, theFile: file });
    };

    const changeScreen = () => {
        setAppState((theAppState) => ({
            ...theAppState,
            current: theAppState.current + 1,
        }));
    };

    const makeUploadFileRequest = async () => {
        const formData = new FormData();

        let progress = 0;

        if (appState.theFile) {
            formData.append("convertFile", appState.theFile);
        }

        const uploadConfig = {
            onUploadProgress: function (progressEvent: any) {
                setAppState((theAppState) => ({
                    ...theAppState,
                    uploadProgress: Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    ),
                }));
            },
        };

        try {
            const response = await axiosCall({
                path: "/upload",
                method: "POST",
                payload: formData,
                onUploadProgress: uploadConfig.onUploadProgress,
            });

            const { fileName, fileId } = response?.data?.data;

            setAppState((theAppState) => ({
                ...theAppState,
                fileName,
                fileId,
            }));

            // this is an intentional setTimeout to allow the user notice the file upload reached 100%
            setTimeout(() => {
                changeScreen();
            }, 1000);
        } catch (error) {
            const theError = error.message;
            setAppState((theAppState) => ({
                ...theAppState,
                fileUploadError: theError,
            }));
        }
    };

    return {
        appState,
        setAppState,
        changeTheFile,
        makeUploadFileRequest,
        changeScreen,
    };
};

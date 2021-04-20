import * as React from "react";
import { axiosCall } from "../../../utilities/helpers/axiosCall";

export interface ApplicationStateDef {
    fileName: undefined | string;
    fileId: undefined | number;
    uploadProgress: number;
    theFile: File | undefined;
    fileUploadError: string;
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
    });

    const changeTheFile = (file: File) => {
        setAppState({ ...appState, theFile: file });
    };

    const makeUploadFileRequest = async () => {
        const formData = new FormData();

        let progress = 0;

        if (appState.theFile) {
            formData.append("convertFile", appState.theFile);
        }

        const uploadConfig = {
            onUploadProgress: function (progressEvent: any) {
                progress = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );

                setAppState({
                    ...appState,
                    uploadProgress: progress,
                });
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

            setAppState({
                ...appState,
                uploadProgress: progress,
                fileName,
                fileId,
            });
        } catch (error) {
            const theError = error.message;
            setAppState((appState) => ({
                ...appState,
                fileUploadError: theError,
            }));
            console.log("THE ERROR MESSAGE", theError);
        }
    };

    return {
        appState,
        setAppState,
        changeTheFile,
        makeUploadFileRequest,
    };
};

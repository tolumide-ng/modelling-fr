import * as React from "react";
import { axiosCall } from "../../../utilities/helpers/axiosCall";

export interface ApplicationStateDef {
    fileName: undefined | string;
    fileId: undefined | number;
    uploadProgress: number;
    theFile: File | undefined;
    fileUploadError: string;
    current: number;
    requestId: string | undefined;
}

interface Action {
    name: string;
    value: any;
}

export type targetTypesDef = "STEP" | "STL" | "IGES";

export const useAppState = () => {
    const [appState, setAppState] = React.useState<ApplicationStateDef>({
        uploadProgress: 0,
        fileName: undefined,
        fileId: undefined,
        theFile: undefined,
        fileUploadError: "",
        current: 1,
        requestId: undefined,
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

    const handleTargetFormat = async (types: targetTypesDef) => {
        try {
            const response = await axiosCall({
                path: "/convert",
                method: "GET",
                params: {
                    target: types,
                    id: appState.fileId,
                },
                payload: {},
            });

            changeScreen();

            // this request must send back a requestId
            // const { requestId } = response?.data?.data;

            // setAppState((theAppState) => ({ ...theAppState, requestId }));
        } catch (error) {}
    };

    // NEXT FUNCTION MAKES THE EVENT SOURCE REQUEST TO THE API FOR THE CONVERT PROGRESS

    return {
        appState,
        setAppState,
        changeTheFile,
        makeUploadFileRequest,
        changeScreen,
        handleTargetFormat,
    };
};

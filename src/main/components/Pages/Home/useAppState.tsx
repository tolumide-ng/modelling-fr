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

        console.log("NOW WITHIN THE MAKE UPLOAD FILE REQUEST API");

        const uploadConfig = {
            onUploadProgress: function (progressEvent: any) {
                console.log("RECEIVED SOMETHING>>>>>>>>>>>>>>", progressEvent);

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
            console.log(
                "BEFORE APPENDING THE RESPONSE FROM THE SERVER!!!!!!!!",
                appState
            );
            const response = await axiosCall({
                path: "/upload",
                method: "POST",
                payload: formData,
                onUploadProgress: uploadConfig.onUploadProgress,
            });

            console.log("THE RESPONSE FROM THE SERVER IS >>>>>>>>>", response);

            const { fileName, fileId } = response?.data?.data;

            setAppState({
                ...appState,
                uploadProgress: progress,
                fileName,
                fileId,
            });
        } catch (error) {
            setAppState({ ...appState, fileUploadError: error.messsage });
        }
    };

    return {
        appState,
        setAppState,
        changeTheFile,
        makeUploadFileRequest,
    };
};

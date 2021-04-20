import * as React from "react";
import { ApplicationStateDef } from ".";
import { axiosCall } from "../../../utilities/helpers/axiosCall";

export const makeUploadFileRequest = async (
    appState: ApplicationStateDef,
    setAppState: React.Dispatch<React.SetStateAction<ApplicationStateDef>>
) => {
    const formData = new FormData();

    if (appState.theFile) {
        formData.append("convertFile", appState.theFile);
    }

    let progress = 0;

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
        const response = await axiosCall({
            path: "/upload",
            method: "POST",
            payload: formData,
            onUploadProgress: uploadConfig.onUploadProgress,
        });

        console.log("THE RESPONSE FROM THE SERVER IS >>>>>>>>>", response);

        const { fileName, fileId } = response?.data?.data;

        setAppState({ ...appState, fileName, fileId });
    } catch (error) {
        setAppState({ ...appState, fileUploadError: error.messsage });
    }
};

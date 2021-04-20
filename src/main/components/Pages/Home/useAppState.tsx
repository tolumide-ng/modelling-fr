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
    convertProgress: number;
    fileConvertError: string;
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
        convertProgress: 0,
        fileConvertError: "",
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

    let ssEvent: EventSource | undefined = undefined;

    React.useEffect(() => {
        return () => {
            if (
                appState.convertProgress > 0 &&
                appState.convertProgress < 100 &&
                ssEvent
            ) {
                ssEvent.close();
            }
        };
    });

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

    const handleTargetFormat = async (type: targetTypesDef) => {
        try {
            await axiosCall({
                path: `/convert/${type}/${appState.fileId}`,
                method: "PATCH",
                payload: {},
            });

            changeScreen();
        } catch (error) {}
    };

    // NEXT FUNCTION MAKES THE EVENT SOURCE REQUEST TO THE API FOR THE CONVERT PROGRESS

    const streamConversion = async () => {
        try {
            ssEvent = new EventSource(
                `${process.env.BASE_URL}/stream/${appState.fileId}`
            );

            ssEvent.addEventListener(
                "message",
                (event: any) => {
                    let data = JSON.parse(event.data);

                    if (data.status) {
                        setAppState((theAppState) => ({
                            ...theAppState,
                            convertProgress: data.status,
                        }));
                    }

                    if (appState.convertProgress >= 100) {
                        if (ssEvent) {
                            ssEvent.close();
                        }
                        changeScreen();
                    }
                },
                false
            );

            ssEvent.addEventListener(
                "error",
                () => {
                    if (ssEvent) {
                        ssEvent.close();
                    }

                    setAppState((theAppState) => ({
                        ...theAppState,
                        fileConvertError:
                            "There was a problem, converting your file, Try later",
                    }));
                },
                false
            );

            ssEvent.addEventListener(
                "close",
                () => {
                    if (ssEvent) {
                        ssEvent.close();
                    }
                },
                false
            );
        } catch (error) {}
    };

    return {
        appState,
        setAppState,
        changeTheFile,
        makeUploadFileRequest,
        changeScreen,
        handleTargetFormat,
        streamConversion,
    };
};

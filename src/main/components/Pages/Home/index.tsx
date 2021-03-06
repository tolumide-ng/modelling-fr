import * as React from "react";
import { ConvertProgress } from "@organisms/ConvertProgress";
import { DownloadFile } from "@organisms/DownloadFile";
import { DropFile } from "@organisms/DropFile";
import { SelectConversion } from "@organisms/SelectConversion";
import { ShadowContainer } from "@organisms/ShadowContainer";
import { UploadFile } from "@organisms/UploadFile";
import { useAppState } from "./useAppState";
import styles from "./index.module.css";

interface DisplayCompsDef {
    [key: number]: () => { component: JSX.Element; description: string };
}

export const HomePage = () => {
    const {
        appState,
        changeScreen,
        changeTheFile,
        makeUploadFileRequest,
        handleTargetFormat,
        streamConversion,
        requestDownload,
    } = useAppState();

    React.useEffect(() => {
        if (appState.current === 2) {
            makeUploadFileRequest();
        }
        if (appState.current === 4) {
            streamConversion();
        }
    }, [appState.current]);

    const displayComps: DisplayCompsDef = {
        1: () => {
            return {
                component: (
                    <DropFile
                        changeScreen={changeScreen}
                        changeFile={changeTheFile}
                    />
                ),
                description:
                    "Step 1: Drag and Drop file or click browse to convert a .shapr file",
            };
        },
        2: () => {
            return {
                component: (
                    <UploadFile
                        fileName={appState.fileName}
                        uploadProgress={appState.uploadProgress}
                        fileUploadError={appState.fileUploadError}
                    />
                ),
                description: "Step 2: Upload File",
            };
        },
        3: () => {
            return {
                component: (
                    <SelectConversion
                        fileName={appState.fileName}
                        handleTargetFormat={handleTargetFormat}
                    />
                ),
                description: "Step 3: Select conversion target",
            };
        },
        4: () => {
            return {
                component: (
                    <ConvertProgress
                        convertProgress={appState.convertProgress}
                        fileName={appState.targetName}
                        targetType={appState.targetType}
                        conversionError={appState.fileConvertError}
                    />
                ),
                description: "Step 4: Converting file...",
            };
        },
        5: () => {
            return {
                component: (
                    <DownloadFile
                        fileName={appState.targetName}
                        handleFileDownload={requestDownload}
                    />
                ),
                description: "Step 5: Download File",
            };
        },
    };

    return (
        <article
            className={styles.ldpg}
            aria-valuetext={displayComps[appState.current]().description}
            aria-valuenow={appState.current}
        >
            <ShadowContainer
                childContent={displayComps[appState.current]().component}
                current={appState.current}
            />
        </article>
    );
};

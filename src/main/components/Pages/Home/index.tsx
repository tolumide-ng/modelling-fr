import * as React from "react";
import { ConvertProgress } from "../../UI/organisms/ConvertProgress";
import { DownloadFile } from "../../UI/organisms/DownloadFile";
import { DropFile } from "../../UI/organisms/DropFile";
import { SelectConversion } from "../../UI/organisms/SelectConversion";
import { ShadowContainer } from "../../UI/organisms/ShadowContainer";
import { UploadFile } from "../../UI/organisms/UploadFile";
import { useAppState } from "./useAppState";
import styles from "./index.module.css";

interface DisplayCompsDef {
    [key: number]: () => { component: JSX.Element; description: string };
}

export interface ApplicationStateDef {
    fileName: undefined | string;
    fileId: undefined | number;
    uploadProgress: number;
    theFile: File | undefined;
    fileUploadError: string;
}

export const HomePage = () => {
    const [current, setCurrent] = React.useState(1);
    const [theFile, setTheFile] = React.useState<File | undefined>(undefined);
    const [fileName, setFileName] = React.useState<undefined | string>(
        undefined
    );

    const {
        appState,
        setAppState,
        changeTheFile,
        makeUploadFileRequest,
    } = useAppState();

    React.useEffect(() => {
        if (current === 2) {
            makeUploadFileRequest();
        }
    }, [current]);

    const displayComps: DisplayCompsDef = {
        1: () => {
            return {
                component: (
                    <DropFile
                        changeScreen={setCurrent}
                        changeFile={changeTheFile}
                        currentScreen={current}
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
                        fileName={theFile?.name ?? ""}
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
                        fileName={fileName ?? theFile?.name ?? ""}
                    />
                ),
                description: "Step 3: Select conversion target",
            };
        },
        4: () => {
            return {
                component: <ConvertProgress />,
                description: "Step 4: Converting file...",
            };
        },
        5: () => {
            return {
                component: (
                    <DownloadFile fileName={fileName ?? theFile?.name ?? ""} />
                ),
                description: "Step 5: Download File",
            };
        },
    };

    return (
        <article
            className={styles.ldpg}
            aria-valuetext={displayComps[current]().description}
            aria-valuenow={current}
        >
            <ShadowContainer
                childContent={displayComps[current]().component}
                current={current}
            />
        </article>
    );
};

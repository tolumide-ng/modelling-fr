import * as React from "react";
import { ConvertTemplate } from "@templates/ConvertTemplate";
import { ProgressStatus } from "@organisms/ProgressStatus";
import styles from "./index.module.css";

interface UploadFileDef {
    fileName: string;
    uploadProgress: number;
    fileUploadError: string;
}

export const UploadFile = (props: UploadFileDef) => {
    return (
        <ConvertTemplate
            fileName={props.fileName || "tolumide_drone.shapr"}
            childComp={
                <div className={styles.upfStatus}>
                    <ProgressStatus
                        successText="Upload successful"
                        progressText="Uploading..."
                        progressPercentage={props.uploadProgress}
                        displayError={props.fileUploadError}
                    />
                </div>
            }
        />
    );
};

import * as React from "react";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import { ProgressStatus } from "../ProgressStatus";
import styles from "./index.module.css";

interface UploadFileDef {
    fileName: string;
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
                    />
                </div>
            }
        />
    );
};

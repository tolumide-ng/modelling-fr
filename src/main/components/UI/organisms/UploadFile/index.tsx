import * as React from "react";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import { UploadStatus } from "../UploadStatus";
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
                    <UploadStatus successText="Upload successful" />
                </div>
            }
        />
    );
};

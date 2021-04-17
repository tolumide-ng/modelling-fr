import * as React from "react";
import { NeumorphLogo } from "../../molecules/NeumorphLogo";
import { UploadStatus } from "../UploadStatus";
import styles from "./index.module.css";

interface UploadFileDef {
    fileName: string;
}

export const UploadFile = (props: UploadFileDef) => {
    return (
        <article className={styles.upf}>
            <div className={styles.upfLogo}>
                <NeumorphLogo
                    fileName={props.fileName || "tolumide_drone.shapr"}
                />
            </div>

            <div className={styles.upfStatus}>
                <UploadStatus />
            </div>
        </article>
    );
};

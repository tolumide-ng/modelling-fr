import * as React from "react";
import styles from "./index.module.css";

interface ProgressStatusDef {
    successText: string;
    progressText: string;
    progressPercentage: number;
}

export const ProgressStatus = (props: ProgressStatusDef) => {
    return (
        <div
            className={
                props.progressPercentage >= 100
                    ? `${styles.ups} ${styles.upsSuccess}`
                    : `${styles.ups} ${styles.upsRegular}`
            }
        >
            {props.progressPercentage < 100 ? (
                <div className={styles.upsUploading}>
                    <p className={styles.upsLoading}>{props.progressText}</p>

                    <div className={styles.upsStatus}></div>
                </div>
            ) : (
                <div className={styles.upsSuccessText}>{props.successText}</div>
            )}
        </div>
    );
};

import * as React from "react";
import styles from "./index.module.css";

interface UploadStatusDef {
    successText: string;
    progressText: string;
}

export const UploadStatus = (props: UploadStatusDef) => {
    const [uploadState, setUploadState] = React.useState(100);
    return (
        <div
            className={
                uploadState >= 100
                    ? `${styles.ups} ${styles.upsSuccess}`
                    : `${styles.ups} ${styles.upsRegular}`
            }
        >
            {uploadState < 100 ? (
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

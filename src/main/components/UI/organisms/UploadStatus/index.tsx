import * as React from "react";
import styles from "./index.module.css";

export const UploadStatus = () => {
    const [uploadState, setUploadState] = React.useState(0);
    return (
        <section className={styles.ups}>
            {uploadState < 100 ? (
                <div className={styles.upsUploading}>
                    <p className={styles.upsLoading}>Uploading...</p>

                    <div className={styles.upsStatus}></div>
                </div>
            ) : (
                <div className=""></div>
            )}
        </section>
    );
};

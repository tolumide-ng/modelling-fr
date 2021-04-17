import * as React from "react";
import styles from "./index.module.css";

export const UploadStatus = () => {
    const [uploadState, setUploadState] = React.useState(0);
    return (
        <section className={styles.ups}>
            {uploadState < 100 ? (
                <div className="">
                    <p>Uploading...</p>

                    <div className=""></div>
                </div>
            ) : (
                <div className=""></div>
            )}
        </section>
    );
};

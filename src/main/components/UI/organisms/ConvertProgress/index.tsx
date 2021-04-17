import * as React from "react";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import { UploadStatus } from "../UploadStatus";
import styles from "./index.module.css";

export const ConvertProgress = () => {
    return (
        <ConvertTemplate
            fileName=""
            childComp={
                <div className={styles.cvtProgStatus}>
                    <UploadStatus
                        successText="Successful"
                        progressText="Converting to STEP"
                    />
                </div>
            }
        />
    );
};

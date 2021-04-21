import * as React from "react";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import { ProgressStatus } from "../ProgressStatus";
import styles from "./index.module.css";

interface ConvertProgressDef {
    convertProgress: number;
    fileName: string;
    targetType: string;
}

export const ConvertProgress = (props: ConvertProgressDef) => {
    return (
        <ConvertTemplate
            fileName={props.fileName}
            childComp={
                <div
                    className={styles.cvtProgStatus}
                    aria-label="conversion progress"
                >
                    <ProgressStatus
                        successText="Successful"
                        progressText={`Converting to ${props.targetType}`}
                        progressPercentage={props.convertProgress}
                    />
                </div>
            }
        />
    );
};

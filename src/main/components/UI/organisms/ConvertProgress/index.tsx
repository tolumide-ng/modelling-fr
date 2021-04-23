import * as React from "react";
import { ConvertTemplate } from "@templates/ConvertTemplate";
import { ProgressStatus } from "@organisms/ProgressStatus";
import styles from "./index.module.css";

interface ConvertProgressDef {
    convertProgress: number;
    fileName: string;
    targetType: string;
    conversionError: string;
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
                        displayError={props.conversionError}
                    />
                </div>
            }
        />
    );
};

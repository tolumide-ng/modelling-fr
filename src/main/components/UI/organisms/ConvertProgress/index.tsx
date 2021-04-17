import * as React from "react";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import { ProgressStatus } from "../ProgressStatus";
import styles from "./index.module.css";

export const ConvertProgress = () => {
    const [progress, setProgress] = React.useState(90);
    return (
        <ConvertTemplate
            fileName=""
            childComp={
                <div className={styles.cvtProgStatus}>
                    <ProgressStatus
                        successText="Successful"
                        progressText="Converting to STEP"
                        progressPercentage={progress}
                    />
                </div>
            }
        />
    );
};

import * as React from "react";
import styles from "./index.module.css";

interface ProgressStatusDef {
    successText: string;
    progressText: string;
    progressPercentage: number;
    displayError?: string;
}

export const ProgressStatus = (props: ProgressStatusDef) => {
    const progressRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (progressRef.current) {
            progressRef.current.style.setProperty(
                "--progress",
                `${props.progressPercentage}%`
            );
        }
    }, [props.progressPercentage]);

    return (
        <div
            aria-label="progress status"
            role="progress status"
            className={
                props.progressPercentage >= 100 && !props.displayError
                    ? `${styles.ups} ${styles.upsSuccess}`
                    : `${styles.ups} ${styles.upsRegular}`
            }
        >
            {props.progressPercentage < 100 ? (
                <div className={styles.upsUploading}>
                    <p className={styles.upsLoading}>{props.progressText}</p>

                    <div
                        className={styles.upsStatus}
                        ref={progressRef}
                        role="progressbar"
                        aria-valuenow={props.progressPercentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                </div>
            ) : (
                <></>
            )}

            {props.progressPercentage >= 100 && !props.displayError ? (
                <div className={styles.upsSuccessText}>{props.successText}</div>
            ) : (
                <></>
            )}

            {props.displayError ? (
                <div className={styles.upsErrorText}>{props.displayError}</div>
            ) : (
                <></>
            )}
        </div>
    );
};

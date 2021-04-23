import * as React from "react";
import { Button } from "@atoms/Button";
import { ConvertTemplate } from "@templates/ConvertTemplate";
import styles from "./index.module.css";

interface DownloadFileDef {
    fileName: string;
    handleFileDownload: () => void;
}

export const DownloadFile = (props: DownloadFileDef) => {
    return (
        <ConvertTemplate
            fileName={props.fileName}
            childComp={
                <div className={styles.dwld}>
                    <Button
                        buttonClass={styles.dwldButton}
                        buttonText="Download"
                        buttonType="button"
                        handleClick={props.handleFileDownload}
                    />
                </div>
            }
        />
    );
};

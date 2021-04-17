import * as React from "react";
import { Button } from "../../atoms/Button";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import styles from "./index.module.css";

interface DownloadFileDef {
    fileName: string;
}

export const DownloadFile = () => {
    return (
        <ConvertTemplate
            fileName=""
            childComp={
                <div className={styles.dwld}>
                    <Button
                        buttonClass={styles.dwldButton}
                        buttonText="Download"
                        buttonType="button"
                    />
                </div>
            }
        />
    );
};

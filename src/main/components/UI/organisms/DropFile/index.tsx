import * as React from "react";
import { confirmSize } from "../../../../utilities/helpers/files";
import { Button } from "../../atoms/Button";
import { NeuMorphLogo } from "../../atoms/NeumorphLogo";
import styles from "./index.module.css";

export const DropFile = () => {
    const fileElem = React.useRef<HTMLInputElement>(null);
    const fileSelect = React.useRef<HTMLButtonElement>(null);

    const [theFile, setTheFile] = React.useState<File | undefined>(undefined);
    const [fileError, setFileError] = React.useState("");

    const handleAcceptUpload = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        if (file) {
            setFileError("");
            try {
                confirmSize(file.size);
                setTheFile(file);
            } catch (error) {
                console.log("the receoved error", error);
                setFileError(error);
            }
        }
    };

    const handleBrowseImage = (e: React.TouchEvent | React.MouseEvent) => {
        if (fileElem.current) {
            fileElem.current.click();
        }
    };

    return (
        <article className={styles.drpFile}>
            <form encType="multipart/form-data" className={styles.drpFileForm}>
                <div className={styles.drpFileDiv}>
                    <NeuMorphLogo />

                    <div className={styles.drpFileText}>
                        {/* <label htmlFor="fileElem">
                            Drop your .shapr file here, or
                        </label> */}
                        Drop your .shapr file here, or{" "}
                        <input
                            type="file"
                            id="fileElem"
                            multiple
                            accept=".shapr"
                            ref={fileElem}
                            className={styles.drpFileInput}
                            onChange={handleAcceptUpload}
                        ></input>
                        <Button
                            handleClick={handleBrowseImage}
                            buttonText="browse"
                            buttonClass={styles.drpFileBrowse}
                            ref={fileSelect}
                        />
                    </div>
                    <p>
                        <small className={styles.drpComment}>
                            Supports: .STEP, .STL and .IGES
                        </small>
                    </p>
                </div>
            </form>
        </article>
    );
};

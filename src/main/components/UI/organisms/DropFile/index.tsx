import * as React from "react";
import { confirmSize } from "@utils/helpers/files";
import { Button } from "@atoms/Button";
import { NeumorphLogo } from "@molecules/NeumorphLogo";
import styles from "./index.module.css";

interface DropFileProps {
    changeScreen: () => void;
    changeFile: (file: File) => void;
}

export const DropFile = (props: DropFileProps) => {
    const fileElem = React.useRef<HTMLInputElement>(null);
    const fileSelect = React.useRef<HTMLButtonElement>(null);
    const formElem = React.useRef<HTMLDivElement>(null);

    const [fileError, setFileError] = React.useState("");

    const handleAcceptUpload = (e: React.ChangeEvent) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];

        if (file) {
            setFileError("");
            try {
                if (confirmSize(file.size)) {
                    props.changeFile(file);
                    props.changeScreen();
                }
            } catch (error) {
                setFileError(error);
            }
        }
    };

    const handleBrowseImage = (e: React.TouchEvent | React.MouseEvent) => {
        if (fileElem.current) {
            fileElem.current.click();
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (formElem.current) {
            formElem.current.classList.add("dragOver");
        }
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (formElem.current) {
            formElem.current.classList.remove("dragOver");
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const uploadedFile = e.dataTransfer?.files[0];
        const reader = new FileReader();

        if (uploadedFile) {
            try {
                if (confirmSize(uploadedFile.size)) {
                    setFileError("");

                    reader.readAsDataURL(uploadedFile);

                    props.changeFile(uploadedFile);
                    props.changeScreen();
                }
            } catch (error) {
                setFileError(error);
            }
        }

        if (formElem.current) {
            formElem.current.classList.remove("dragOver");
        }
    };

    return (
        <article className={styles.drpFile}>
            <form encType="multipart/form-data" className={styles.drpFileForm}>
                <div
                    className={styles.drpFileDiv}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragOver}
                    onDragEnd={handleDragEnd}
                    onDragLeave={handleDragEnd}
                    onDrop={handleDrop}
                    onDragExit={handleDragEnd}
                    ref={formElem}
                >
                    <NeumorphLogo removeMargin={true} />
                    <div className={styles.drpFileText}>
                        Drop your .shapr file here, or
                        <input
                            type="file"
                            id="fileElem"
                            ref={fileElem}
                            className={styles.drpFileInput}
                            accept=".shapr"
                            onChange={handleAcceptUpload}
                        ></input>
                        <Button
                            handleClick={handleBrowseImage}
                            buttonText="browse"
                            buttonClass={styles.drpFileBrowse}
                            ref={fileSelect}
                        />
                    </div>
                    <p className={styles.drpCommentP}>
                        <small className={styles.drpComment}>
                            Supports: .STEP, .STL and .IGES
                        </small>
                    </p>
                    {fileError ? (
                        <small className="appError">{fileError}</small>
                    ) : (
                        ""
                    )}
                </div>
            </form>
        </article>
    );
};

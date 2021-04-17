import * as React from "react";
import { NeuMorphLogo } from "../../atoms/NeumorphLogo";
import styles from "./index.module.css";

export const DropFile = () => {
    return (
        <article className={styles.drpFile}>
            <form encType="multipart/form-data" className={styles.drpFileForm}>
                <div className={styles.drpFileDiv}>
                    <NeuMorphLogo />
                    <input
                        type="file"
                        id="fileElem"
                        multiple
                        accept=".shapr"
                    ></input>

                    <p className={styles.drpFileText}>
                        Drop your .shapr file here, or{" "}
                        <span className={styles.drpFileBrowse}>browse</span>
                    </p>
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

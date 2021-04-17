import * as React from "react";
import { Button } from "../../atoms/Button";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import styles from "./index.module.css";

export const targetFormats = ["STEP", "STL", "IGES"];

interface SelectConversionDef {
    fileName: string;
}

export const SelectConversion = (props: SelectConversionDef) => {
    return (
        <ConvertTemplate
            fileName={props.fileName}
            childComp={
                <div className={styles.selectCv} aria-label="convert targets">
                    <p className={styles.selectCvTitle}>Convert to</p>
                    <section className={styles.selectCvAllButtons}>
                        {targetFormats.map((button) => (
                            <Button
                                buttonClass={styles.selectCvButton}
                                buttonText={button}
                                buttonType="button"
                                key={button}
                            />
                        ))}
                    </section>
                </div>
            }
        />
    );
};

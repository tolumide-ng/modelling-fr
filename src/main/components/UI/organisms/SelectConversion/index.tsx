import * as React from "react";
import { Button } from "@atoms/Button";
import { ConvertTemplate } from "@templates/ConvertTemplate";
import { targetTypesDef } from "@pages/Home/useAppState";
import styles from "./index.module.css";

export const targetFormats: Array<targetTypesDef> = ["STEP", "STL", "IGES"];

interface SelectConversionDef {
    fileName: string;
    handleTargetFormat: (types: targetTypesDef) => Promise<void>;
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
                                handleClick={() => {
                                    props.handleTargetFormat(button);
                                }}
                            />
                        ))}
                    </section>
                </div>
            }
        />
    );
};

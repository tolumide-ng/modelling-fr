import * as React from "react";
import { Button } from "../../atoms/Button";
import { ConvertTemplate } from "../../template/ConvertTemplate";
import styles from "./index.module.css";

const buttonTypes = ["STEP", "STL", "IGES"];

interface SelectConversionDef {
    fileName: string;
}

export const SelectConversion = () => {
    return (
        <ConvertTemplate
            fileName=""
            childComp={
                <div className={styles.selectCv}>
                    <p className={styles.selectCvTitle}>Convert to</p>
                    <section className={styles.selectCvAllButtons}>
                        {buttonTypes.map((button) => (
                            <Button
                                buttonClass={styles.selectCvButton}
                                buttonText={button}
                                buttonType="button"
                            />
                        ))}
                    </section>
                </div>
            }
        />
    );
};

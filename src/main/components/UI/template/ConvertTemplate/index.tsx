import * as React from "react";
import { NeumorphLogo } from "../../molecules/NeumorphLogo";
import styles from "./index.module.css";

interface ConvertTemplateDef {
    fileName: string;
    childComp: JSX.Element;
}

export const ConvertTemplate = (props: ConvertTemplateDef) => {
    return (
        <article className={styles.cvt}>
            <div className={styles.cvtLogo}>
                <NeumorphLogo
                    fileName={props.fileName || "tolumide_drone.shapr"}
                />
            </div>

            <div className={styles.cvtStatus}>{props.childComp}</div>
        </article>
    );
};

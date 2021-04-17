import * as React from "react";
import { DropFile } from "../DropFile";
import styles from "./index.module.css";

interface ShadowContainerDef {
    childContent: JSX.Element;
}

export const ShadowContainer = (props: ShadowContainerDef) => {
    const [stateNum, setStateNum] = React.useState(1);
    return (
        <article
            className={
                stateNum === 1
                    ? `${styles.shdContScreenOne} ${styles.shdCont}`
                    : styles.shdCont
            }
        >
            <DropFile />
        </article>
    );
};

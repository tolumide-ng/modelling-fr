import * as React from "react";
import { DropFile } from "../DropFile";
import styles from "./index.module.css";

interface ShadowContainerDef {
    childContent: JSX.Element;
}

export const ShadowContainer = (props: ShadowContainerDef) => {
    return (
        <article className={styles.shdCont}>
            <DropFile />
        </article>
    );
};

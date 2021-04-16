import * as React from "react";
import styles from "./index.module.css";

interface ShadowContainerDef {
    childContent: JSX.Element;
}

export const ShadowContainer = (props: ShadowContainerDef) => {
    return <article className={styles.shdCont}>{props.childContent}</article>;
};

import * as React from "react";
import styles from "./index.module.css";

interface ShadowContainerDef {
    childContent: JSX.Element;
    current: number;
}

export const ShadowContainer = (props: ShadowContainerDef) => {
    return (
        <article
            className={
                props.current === 1
                    ? `${styles.shdContScreenOne} ${styles.shdCont}`
                    : styles.shdCont
            }
        >
            {props.childContent}
        </article>
    );
};

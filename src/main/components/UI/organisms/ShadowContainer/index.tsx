import * as React from "react";
import { DropFile } from "../DropFile";
import styles from "./index.module.css";

interface ShadowContainerDef {
    childContent: JSX.Element;
}

interface displayCompsDef {
    [key: number]: () => JSX.Element;
}

export const ShadowContainer = (props: ShadowContainerDef) => {
    const [current, setCurrent] = React.useState(1);

    const displayComps: displayCompsDef = {
        1: () => <DropFile changeScreen={setCurrent} />,
    };

    return (
        <article
            className={
                current === 1
                    ? `${styles.shdContScreenOne} ${styles.shdCont}`
                    : styles.shdCont
            }
        >
            {displayComps[current]()}
        </article>
    );
};

import * as React from "react";
import { DropFile } from "../../UI/organisms/DropFile";
import { ShadowContainer } from "../../UI/organisms/ShadowContainer";
import styles from "./index.module.css";

interface displayCompsDef {
    [key: number]: () => JSX.Element;
}

export const HomePage = () => {
    const [current, setCurrent] = React.useState(1);

    const displayComps: displayCompsDef = {
        1: () => <DropFile changeScreen={setCurrent} />,
    };

    return (
        <article className={styles.ldpg}>
            <ShadowContainer
                childContent={displayComps[current]()}
                current={current}
            />
        </article>
    );
};

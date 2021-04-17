import * as React from "react";
import { ShadowContainer } from "../../UI/organisms/ShadowContainer";
import styles from "./index.module.css";

export const HomePage = () => {
    return (
        <article className={styles.ldpg}>
            <ShadowContainer childContent={<></>} />
        </article>
    );
};

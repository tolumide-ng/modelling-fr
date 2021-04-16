import * as React from "react";
import styles from "./index.module.css";

export const NotFoundPage = () => {
    return (
        <article className={styles.notfd}>
            <section className={styles.notfdCont}>
                <h1 className={styles.notfdTitle}>404</h1>
                <p className={styles.notfdDescription}>Page not found</p>
            </section>
        </article>
    );
};

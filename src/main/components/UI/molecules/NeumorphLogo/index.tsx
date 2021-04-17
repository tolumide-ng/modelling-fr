import * as React from "react";
import neumorphLogo from "../../../../assets/images/neumorph.svg";
import styles from "./index.module.css";

interface NeumorphLogoDef {
    fileName?: string;
    removeMargin?: boolean;
}

export const NeumorphLogo = (props: NeumorphLogoDef) => {
    return (
        <div
            className={
                props.removeMargin
                    ? styles.neu
                    : `${styles.neu} ${styles.neuTop}`
            }
        >
            <img
                src={neumorphLogo}
                alt="logo of the modelling application"
                className={styles.newImg}
            />
            {props.fileName ? (
                <p className={styles.neuName}>{props.fileName}</p>
            ) : (
                <></>
            )}
        </div>
    );
};
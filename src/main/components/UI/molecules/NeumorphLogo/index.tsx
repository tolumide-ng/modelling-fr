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
            aria-label={props.fileName ? "logo and file name" : "logo"}
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
            <p
                className={props.fileName ? styles.neuName : styles.neuHide}
                aria-label="file name"
                aria-hidden={props.fileName ? false : true}
            >
                {props.fileName}
            </p>
        </div>
    );
};

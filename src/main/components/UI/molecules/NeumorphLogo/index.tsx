import * as React from "react";
import neumorphLogo from "../../../../assets/images/neumorph.svg";
import styles from "./index.module.css";

interface NeumorphLogoDef {
    fileName?: string;
}

export const NeumorphLogo = (props: NeumorphLogoDef) => {
    return (
        <div className={styles.neu}>
            <img src={neumorphLogo} alt="logo of the modelling application" />
            {props.fileName ? (
                <p className={styles.neuName}>{props.fileName}</p>
            ) : (
                <></>
            )}
        </div>
    );
};

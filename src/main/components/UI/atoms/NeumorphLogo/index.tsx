import * as React from "react";
import neumorphLogo from "../../../../assets/images/neumorph.svg";
import styles from "./index.module.css";

export const NeuMorphLogo = () => {
    return (
        <div className={styles.neu}>
            <img src={neumorphLogo} alt="logo of the modelling application" />
        </div>
    );
};

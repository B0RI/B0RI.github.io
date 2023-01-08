import React from "react";
import styles from "../styles/Prompt.module.css";

const Prompt = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <span className={styles.UserName}>B0RI@B0RI-ui-MacBookPro</span>
                <div className={styles.BlackTriangle}></div>
                <div className={styles.Text}>~</div>
            </div>
            <div className={styles.SkyBlueTriangle}></div>
        </div>
    );
};

export default Prompt;

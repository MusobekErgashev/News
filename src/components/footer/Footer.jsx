import React from 'react'
import leftArrow from "../../assets/left-arrow.png"
import rightArrow from "../../assets/right-arrow.png"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="#" className={styles.arrows}>
                <img src={leftArrow} alt="" />
            </a>

            <a href="" className={styles.pages}>1</a>
            <a href="" className={styles.pages}>2</a>
            <a href="" className={styles.pages}>3</a>
            <a href="" className={styles.pages}>4</a>
            <a href="" className={styles.pages}>5</a>

            <a href="#" className={styles.arrows}>
                <img src={rightArrow} alt="" />
            </a>
        </div>
    )
}

export default Footer
import React from "react";
import styles from '../styles/AbyssinianCat.module.css'
import axios from "axios/index";

const AbyssinianCat = ({animal}) => {
    console.log("AbyssinianCat",animal);
    return (
        <div className={styles.container}>
            <div className={styles.article_heading_wrapper}>
                <h4 className={styles.h4}>Animals</h4>
                <div>
                    <a href="">
                        <img
                            src="https://assets-global.website-files.com/603e2a91b98158c96d372b5a/6040c4bad8ae7e05e834e61d_5f5b7128a52e8ee4195da48a_kidadl-writer.jpeg"
                            alt=""/>
                        <div className={styles.author_inline}>Kidadl Team</div>
                    </a>
                    <div className="date-inline">{animal.created_at.slice(0,10)}</div>
                </div>
                <h1>{animal.article_name}</h1>
            </div>
            <div className="hero-wrapper">
                <img src={animal.hero_image} alt={animal.hero_alt_text} className="article-hero-image"/>
            </div>
            <div className="container-article-text">{animal.introduction}</div>
            <div className="fact-file-container">
                <h2 className="fact-file-top-heading">Abyssinian cat</h2>
                <div className="fact-file-row">
                    <div className="fact-file-column-1"> </div>
                </div>
            </div>
        </div>
    )
};
AbyssinianCat.getInitialProps = async ctx => {
    try {
        const res = await axios.get('https://limitless-temple-43758.herokuapp.com/animals');
        const animal = res.data[0];
        return {animal};
    } catch (error) {
        return {error};
    }
};
export default AbyssinianCat
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';

const Home = ({animals, error}) => {
    console.log(animals);
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    return (
        <div className={styles.cardsWraper}>
            {animals.map(animal => (
                <div key={animal.id} className={styles.card}>
                    <img src={animal.hero_image} alt=""/>
                    <h2>{animal.animal_name}</h2>
                </div>
            ))}
        </div>
    );
};

Home.getInitialProps = async ctx => {
    try {
        const res = await axios.get('https://limitless-temple-43758.herokuapp.com/animals');
        const animals = res.data;
        return {animals};
    } catch (error) {
        return {error};
    }
};

export default Home;
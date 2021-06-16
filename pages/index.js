import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout'

const Home = ({animals, error}) => {
    // console.log("Home", animals);
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    return (
        <Layout home>
            <div className={styles.cardsWraper}>
                {animals.map(animal =>
                    <div key={animal.id} className={styles.card}>
                        <Link href={`/animal-facts/${animal.slug}`}>
                            <a>
                                <img src={animal.hero_image} alt={animal.hero_alt_text}/>
                                <h2>{animal.article_name}</h2>
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
};

Home.getInitialProps = async ctx => {
    try {
        const res = await axios.get('https://strapi-backend-project.herokuapp.com/animals');
        const animals = res.data;
        return {animals};
    } catch (error) {
        return {error};
    }
};

export default Home;
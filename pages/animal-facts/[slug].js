import {useRouter} from 'next/router'
import Layout from '../../components/layout';
import axios from "axios/index";
// import styles from '../../styles/Animal.modul.css';

const Animal = ({animals}) => {
    const router = useRouter();
    const {slug} = router.query;
    const animalData = animals.filter(animal => animal.slug === slug);
    console.log("getStaticProps", animalData);

    return (
        <Layout>
            {animalData.map(animal => (
                <div key={animal.id} className={"article"}>
                    <div className={"article_heading_wrapper"}>
                        <h4>Animals</h4>
                        <div>
                            <a href="">
                                <img className={"article_heading_img"}
                                     src="https://assets-global.website-files.com/603e2a91b98158c96d372b5a/6040c4bad8ae7e05e834e61d_5f5b7128a52e8ee4195da48a_kidadl-writer.jpeg"
                                     alt=""/>
                                <span>Kidadl Team</span>
                            </a>
                            <span className="date-inline">{animal.created_at.slice(0, 10)}</span>
                        </div>
                        <h1>{animal.article_name}</h1>
                    </div>
                    <div className={"container"}>

                        <div className="hero-wrapper">
                            <img src={animal.hero_image} alt={animal.hero_alt_text} className="article-hero-image"/>
                        </div>
                        <div className="container-article-text">
                            <div dangerouslySetInnerHTML={{__html: animal.introduction}}/>
                        </div>

                        <div className="fact-file-container">
                            <h2 className="fact-file-top-heading">{animal.animal_name} Fact File</h2>
                            <div className="fact-file-horizontal-rule"/>
                            <div className="fact-file-row">
                                <div className="fact-file-column-1 col">
                                    <div className="fact-container">
                                        <h4 className="fact-question">What do they prey on?</h4>
                                        <p className="fact-answer">{animal.prey_on}</p>
                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">What do they eat?</h4>
                                        <p>{animal.eat}</p>
                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">Average litter size?</h4>
                                        <p>{animal.litter_size}</p>
                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">How much do they weigh?</h4>
                                        <p>{animal.weigh}</p>
                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">How long are they?</h4>
                                        <div dangerouslySetInnerHTML={{__html: animal.long}}/>

                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">How tall are they?</h4>
                                        <p dangerouslySetInnerHTML={{__html: animal.tall}}/>
                                    </div>
                                    <div className="fact-file-horizontal-rule"/>

                                    <div className="fact-container">
                                        <h4 className="fact-question">What do they look like?</h4>
                                        <p>{animal.look_like}</p>
                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">Skin Type</h4>
                                        <p>{animal.skin_type}</p>
                                    </div>
                                </div>
                                <div className="fact-file-column-1 col">
                                    <div className="fact-container">
                                        <h4 className="fact-question">What are their main threats?</h4>
                                        <p>{animal.main_threats}</p>
                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">What is their conservation status?</h4>
                                        <p>{animal.conservation_status}</p>
                                    </div>
                                    <div className="fact-file-horizontal-rule"/>
                                    <div className="fact-container">
                                        <h4 className="fact-question">Where you'll find them</h4>
                                        <p>{animal.find_them}</p>
                                    </div>
                                    <div className="fact-container">
                                        <h4 className="fact-question">Locations</h4>
                                        <p>{animal.locations}</p>
                                    </div>
                                    <div className="fact-container-wrap">
                                        <div className="fact-container-left col">
                                            <div className="fact-container">
                                                <h4 className="fact-question">Kingdom</h4>
                                                <p>{animal.kingdom}</p>
                                            </div>
                                            <div className="fact-container">
                                                <h4 className="fact-question">Class</h4>
                                                <p>{animal.class}</p>
                                            </div>
                                            <div className="fact-container">
                                                <h4 className="fact-question">Scientific Name</h4>
                                                <p>{animal.scientific_name}</p>
                                            </div>
                                        </div>
                                        <div className="fact-container-left col">
                                            <div className="fact-container">
                                                <h4 className="fact-question">Family</h4>
                                                <p>{animal.family}</p>
                                            </div>
                                            <div className="fact-container">
                                                <h4 className="fact-question">Genus</h4>
                                                <p>{animal.genus}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-article-body">
                            <div dangerouslySetInnerHTML={{__html: animal.body_copy}}/>
                        </div>

                    </div>
                </div>
            ))}
        </Layout>
    )
};

Animal.getInitialProps = async ctx => {
    try {
        const res = await axios.get('https://strapi-backend-project.herokuapp.com/animals');
        const animals = res.data;
        return {animals};
    } catch (error) {
        return {error};
    }
};


export default Animal
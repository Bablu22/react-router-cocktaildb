import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import Coctails from '../Coctails/Coctails';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



const Home = () => {

    const [coctails, setCoctails] = useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then(res => res.json())
            .then(data => setCoctails(data.drinks))
    }, [])


    return (
        <div>
            <div className="container mt-5">
                <h1 className='text-center fw-bold fst-italic py-2 text-danger mb-4'>Welcome to TheCocktailDB</h1>
                {
                    coctails.length === 0 ?
                        <div className=" text-center">
                            <Loader
                                type="Oval"
                                color="#00BFFF"
                                height={50}
                                width={50}

                            />
                        </div>
                        :
                        <Row xs={1} md={4} className="g-4">
                            {
                                coctails.map(coctail => <Coctails
                                    key={coctail.idDrink}
                                    item={coctail}
                                ></Coctails>)
                            }
                        </Row>
                }
    
            </div>
        </div>
    );
};

export default Home;
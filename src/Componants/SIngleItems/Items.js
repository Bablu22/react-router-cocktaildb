import React from 'react';

const Items = (props) => {

    const { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strInstructionsDE } = props.item
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strDrinkThumb} className="img-fluid rounded-start h-100 w-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {strDrink}</h5>
                            <p className="card-text">Description: {strInstructions} {strInstructionsDE}</p>
                            <p className="card-text"><small className="text-muted">Category: {strCategory}</small></p>
                            <p className="card-text"><small className="text-muted">Type: {strAlcoholic}</small></p>
                            <p className="card-text"><small className="text-muted">Glass: {strGlass}</small></p>

                            <button onClick={(event) => props.order(props.item, event)} className="btn btn-danger px-5 py-1">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;
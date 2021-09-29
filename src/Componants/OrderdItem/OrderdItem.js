import React from 'react';

const OrderdItem = (props) => {
    const { strDrink, strDrinkThumb, strCategory } = props.orders
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
                            <p className="card-text"><small className="text-muted">Category: {strCategory}</small></p>
                            <button onClick={() => props.remove(props.orders)} className="btn btn-primary py-0 me-3">Cancle</button>
                            <button onClick={() => props.handle(props.orders)} className="btn btn-primary py-0">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderdItem;

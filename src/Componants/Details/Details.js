import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import OrderdItem from '../OrderdItem/OrderdItem';
import OrderdDetails from '../OrderdItemDetails/OrderdDetails';
import Items from '../SIngleItems/Items';

const getDataFromStore = () => {
    let list = localStorage.getItem('cart')
    if (list) {
        return JSON.parse(localStorage.getItem('cart'));
    }
    else {
        return []
    }
}

const Details = () => {
    const { itemID } = useParams()

    const [items, setItems] = useState([])
    const [orders, setOrders] = useState(getDataFromStore);
    const [orderdItem, setOrderdItem] = useState([]);

    const orderdItemDetails = item => {
        const newItem = [...orderdItem, item]
        setOrderdItem(newItem);
        console.log(newItem);
    }

    const handleOrderItems = (item, event) => {
        const newItem = [...orders, item]
        setOrders(newItem);
        event.target.setAttribute('disabled', true);
        event.target.innerText = 'Already-Added'
    }

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${itemID}`)
            .then(res => res.json())
            .then(data => setItems(data.drinks))
    }, [])

    // Local storage
    useEffect(() => {
        return localStorage.setItem('cart', JSON.stringify(orders))
    }, [orders])

    // Cancle orders
    const removeItem = item => {
        const remove = orders.filter(i => i.idDrink !== item.idDrink)
        setOrders(remove)
    }

    // order Button

    const history = useHistory()

    const orderHandle = () => {
        history.push('/login')
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    {
                        items.map(item => <Items
                            key={item.idDrink}
                            item={item}
                            order={handleOrderItems}
                        >
                        </Items>)
                    }

                    {
                        orderdItem.map(item => <OrderdDetails
                            key={item.idDrink}
                            item={item}
                        ></OrderdDetails>)
                    }
                </div>
                <div className="col-md-4">
                    <div className="bg-danger rounded mb-4 px-5">
                        <h2 className="text-center fw-bold fst-italic">Order List</h2>
                        <h4 className="pb-3">Total Item:{orders.length}</h4>
                        <button onClick={orderHandle} className="btn btn-warning fw-bold m-auto w-100 px-5 py-0 mb-3">OrderNow</button>
                    </div>
                    {
                        orders.map(order => <OrderdItem
                            key={order.idDrink}
                            orders={order}
                            remove={removeItem}
                            handle={orderdItemDetails}
                        >
                        </OrderdItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Details;

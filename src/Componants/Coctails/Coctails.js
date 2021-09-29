import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory, } from 'react-router';


const Coctails = (props) => {
    const { strDrink, strDrinkThumb, idDrink } = props.item

    const history = useHistory()

    const eventHandle = () => {
        history.push(`/details/${idDrink}`);
    }

    return (
        <div>
            <Col>
                <Card style={{ height: '400px' }}>
                    <Card.Img variant="top" src={strDrinkThumb} className="w-75 mx-auto p-2" />
                    <Card.Body>
                        <Card.Title className="text-center">{strDrink}</Card.Title>
                    </Card.Body>
                    <Button onClick={eventHandle} className="btn btn-info my-2 fw-medium mx-3">See Details</Button>
                </Card>
            </Col>
        </div >
    );
};

export default Coctails;
import './PriceCard.css';
import { Button } from 'react-bootstrap';

function PriceCard(props) {
    return (
        <div className='priceCard'>
            <h1>{props.title}</h1>
            <h1>{props.price}</h1>
            <p className='desc'>{props.description}</p>
            <Button className='cardButton' href={props.link}>{props.buttonText}</Button>
        </div>
    )
}

export default PriceCard;
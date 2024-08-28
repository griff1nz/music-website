import './PriceCard.css';

function PriceCard(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.price}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default PriceCard;
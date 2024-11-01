import PriceCard from "../components/PriceCard";
// import { useInView, motion } from 'framer-motion'
const price_data = [
    {
        id: 'price1',
        title: 'Individual Lesson',
        price: '$20',
        description: 'Individual 30-minute lesson',
        link: 'https://calendly.com/zion-isaac-griffin',
        buttonText: "Book now"
    },
    {
        id: 'price2',
        title: '30 Minute Lesson (Package of 4) - $75',
        price: '$18.75/lesson',
        description: 'Four weekly 30-minute lessons',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
    {
        id: 'price3',
        title: '30 Minute Lesson (Package of 10) - $180',
        price: '$18/lesson',
        description: 'Ten weekly 30-minute lessons',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
    {
        id: 'price4',
        title: '45 Minute Lesson (Package of 4) - $110',
        price: '$27.50/lesson',
        description: 'Four weekly 45-minute lessons',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
    {
        id: 'price5',
        title: '45 Minute Lesson (Package of 10) - $250',
        price: '$25/lesson - Best value!',
        description: 'Ten weekly 45-minute lessons',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
]

function Pricing() {
    
    return (
        <>
            <div className='section' id='pricing' style={{ padding: '16px' }}>
                <h1>Pricing</h1>
                <p style={{textAlign: 'center'}}>I offer individual 30-minute lessons as well as packages of four or ten 30-minute weekly lessons. Packages of four or ten 45-minute weekly lessons are also available.</p>
                <div className='cardlist'>

                    {price_data.map(data => <PriceCard key={data.id} title={data.title} price={data.price} description={data.description} link={data.link} buttonText={data.buttonText} />)}
                    {/* Add individual cards */}
                    {/* <li>30 minute lesson (individual): $25</li>
                    <li>30 minute lesson (4 weeks): $90</li>
                    <li>30 minute lesson (10 weeks): $225</li>
                    <li>45 minute lesson (4 weeks): $130</li>
                    <li>45 minute lesson (10 weeks): $315</li> */}

                </div>
                
                <p style={{textAlign: 'center'}}>All transactions are processed via Stripe.<a target='_blank' href='../../Payment & Refund Policy.pdf'>Click here</a>to view payment and refund terms.</p> {/* Click here will be a link */}
            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />
        </>
    )
}
export default Pricing;
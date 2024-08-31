import PriceCard from "../components/PriceCard";
// import { useInView, motion } from 'framer-motion'
const price_data = [
    {
        id: 'price1',
        title: 'Individual 30 Minute Lesson',
        price: '$25',
        description: 'One 30 minute lesson',
        link: 'calendly.com/zion-isaac-griffin',
        buttonText: "Book now"
    },
    {
        id: 'price2',
        title: '30 Minute Lesson (Package of 4) - $90',
        price: '$22.50/lesson',
        description: 'Four weekly 30 minute lessons, charged every 28 days',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
    {
        id: 'price3',
        title: '30 Minute Lesson (Package of 10) - $220',
        price: '$22/lesson',
        description: 'Ten weekly 30 minute lessons, charged every 70 days',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
    {
        id: 'price4',
        title: '45 Minute Lesson (Package of 4) - $130',
        price: '$32.50/lesson',
        description: 'Four weekly 45 minute lessons, charged every 28 days',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
    {
        id: 'price5',
        title: '45 Minute Lesson (Package of 10) - $315',
        price: '$31.50/lesson',
        description: 'Ten weekly 45 minute lessons, charged every 70 days',
        link: 'mailto:zion.isaac.griffin@gmail.com',
        buttonText: "Contact me"
    },
]

function Pricing() {
    
    return (
        <>
            <div className='section' id='pricing' style={{ padding: '16px' }}>
                <h1>Pricing</h1>
                <p>I offer individual 30-minute lessons as well as packages of four or ten weekly lessons. Packages of four or ten 45-minute weekly lessons are also available.</p>
                <div className='cardlist'>

                    {price_data.map(data => <PriceCard key={data.id} title={data.title} price={data.price} description={data.description} link={data.link} buttonText={data.buttonText} />)}
                    {/* Add individual cards */}
                    {/* <li>30 minute lesson (individual): $25</li>
                    <li>30 minute lesson (4 weeks): $90</li>
                    <li>30 minute lesson (10 weeks): $225</li>
                    <li>45 minute lesson (4 weeks): $130</li>
                    <li>45 minute lesson (10 weeks): $315</li> */}

                </div>
                
                <p>All transactions are processed via Stripe.<a target='_blank' href='../../public/Payment & Refund Policy.pdf'>Click here</a>to view payment and refund terms.</p> {/* Click here will be a link */}
            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />
        </>
    )
}
export default Pricing;
import PriceCard from "../components/PriceCard";
const price_data = [
    {
        id: 'price1',
        title: 'Individual 30 Minute Lesson',
        price: '$25',
        description: 'One 30 minute lesson',
        link: 'calendly.com/zion-isaac-griffin'
    },
    {
        id: 'price2',
        title: '30 Minute Lesson (Package of 4)',
        price: '$90 ($22.5/lesson)',
        description: 'Four weekly 30 minute lessons, charged every 28 days',
        link: 'mailto:zion.isaac.griffin@gmail.com'
    },
    {
        id: 'price3',
        title: '30 Minute Lesson (Package of 10)',
        price: '$225 ($22.5/lesson)',
        description: 'Ten weekly 30 minute lessons, charged every 70 days',
        link: 'mailto:zion.isaac.griffin@gmail.com'
    },
    {
        id: 'price4',
        title: '45 Minute Lesson (Package of 4)',
        price: '$130 ($32.5/lesson)',
        description: 'Four weekly 45 minute lessons, charged every 28 days',
        link: 'mailto:zion.isaac.griffin@gmail.com'
    },
    {
        id: 'price5',
        title: '45 Minute Lesson (Package of 10)',
        price: '$315 ($31.5/lesson)',
        description: 'Ten weekly 45 minute lessons, charged every 70 days',
        link: 'mailto:zion.isaac.griffin@gmail.com'
    },
]

function Pricing() {
    return (
        <>
            <div className='section' id='pricing' style={{ padding: '16px' }}>
                <h1>Pricing</h1>
                <p>I offer individual 30-minute lessons as well as packages of four or ten weekly lessons. Packages of four or ten 45-minute weekly lessons are also available.</p>
                <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {price_data.map(data => <PriceCard key={data.id} title={data.title} price={data.price} description={data.description}/>)}
                    {/* Add individual cards */}
                    {/* <li>30 minute lesson (individual): $25</li>
                    <li>30 minute lesson (4 weeks): $90</li>
                    <li>30 minute lesson (10 weeks): $225</li>
                    <li>45 minute lesson (4 weeks): $130</li>
                    <li>45 minute lesson (10 weeks): $315</li> */}
                </ul>
                <p>All transactions are processed via Stripe. Click here to view payment and refund terms.</p> {/* Click here will be a link */}
            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />
        </>
    )
}
export default Pricing;
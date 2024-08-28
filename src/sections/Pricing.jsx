function Pricing() {
    return (
        <>
            <div className='section' id='pricing' style={{ padding: '16px' }}>
                <h1>Pricing</h1>
                <p>I offer individual 30-minute lessons as well as packages of four or ten weekly lessons. Packages of four or ten 45-minute weekly lessons are also available.</p>
                <ul>
                    {/* Add individual cards */}
                    <li>30 minute lesson (individual): $25</li>
                    <li>30 minute lesson (4 weeks): $90</li>
                    <li>30 minute lesson (10 weeks): $225</li>
                    <li>45 minute lesson (4 weeks): $130</li>
                    <li>45 minute lesson (10 weeks): $315</li>
                </ul>
                <p>All transactions are processed via Stripe. Click here to view payment and refund terms.</p> {/* Click here will be a link */}
            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />
        </>
    )
}
export default Pricing;
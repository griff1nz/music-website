function Schedule() {
    return (
        <>
            <div className='section' id='schedule' style={{ padding: '16px' }}>
                <h1>Schedule</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <iframe id='calendar' src="https://calendar.google.com/calendar/embed?src=239e6720ce364787db608be3f928f18750ec61f2fd54cd88ee7922bfe31bd20a%40group.calendar.google.com&ctz=America%2FNew_York"  frameBorder="0" ></iframe>
                </div>
            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />
        </>
    )
}
export default Schedule;
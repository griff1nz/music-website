import './PriceCard.css';
import { Button } from 'react-bootstrap';
import { useInView, motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from 'react';

function PriceCard(props) {
    const ref = useRef(null);
    const isInView = useInView(ref)
    const mainControl = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControl.start('visible')
        }
    }, [isInView])
    return (
            <motion.div ref={ref} className='priceCard'
                variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial='hidden'
                animate={mainControl}
                transition={{ duration: 0.3, delay: 0.25 }}>
                <h1>{props.title}</h1>
                <h4>{props.price}</h4>
                <p className='desc'>{props.description}</p>
                <Button className='cardButton' variant='secondary' target="_blank" href={props.link}>{props.buttonText}</Button>
            </motion.div>
    )
}

export default PriceCard;
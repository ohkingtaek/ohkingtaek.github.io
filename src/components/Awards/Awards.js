import uniqid from 'uniqid'
import { awards } from '../../portfolio'
import AwardContainer from '../AwardContainer/AwardContainer'
import './Awards.css'

const Awards = () => {
    if (!awards.length) return null

    return (
        <section id='awards' className='section awards'>
            <h2 className='section__title'>Awards</h2>

            <div className='awards__grid'>
            {awards.map((award) => (
                <AwardContainer key={uniqid()} award={award} />
            ))}
            </div>
        </section>
    )
}

export default Awards

import uniqid from 'uniqid'
import { papers } from '../../portfolio'
import PaperContainer from '../PaperContainer/PaperContainer'
import './Papers.css'

const Papers = () => {
    if (!papers.length) return null

    return (
        <section id='papers' className='section papers'>
            <h2 className='section__title'>Papers</h2>

            <div className='papers__grid'>
            {papers.map((paper) => (
                <PaperContainer key={uniqid()} paper={paper} />
            ))}
            </div>
        </section>
    )
}

export default Papers

import { contacts } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contacts.length) return null
  return (
    <section className='section contact center' id='contacts'>
      <h2 className='section__title'>Contact</h2>
      <div className='contacts_list center'>
        {<a href={`tel:${contacts.phone}`}>
          <span type='button' className='btn btn--outline'>
            Call me
          </span>
        </a>}
        {<a href={`mailto:${contacts.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>}
      </div>
      </section>
  )
}

export default Contact

import { useRef } from "react";
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './AwardContainer.css'

function AwardContainer({ award }) {
  const modalRef = useRef();

  return (
    <section>

      <div className='award'>
        <div
        onClick={() => modalRef.current.showModal()} aria-hidden="true"
        >
          <h3>{award.name}</h3>
          <p className='award__description'>{award.description}</p>
          {award.stack && (
            <ul className='award__stack'>
              {award.stack.map((item) => (
                <li key={uniqid()} className='award__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          {award.sourceCode && (
            <a
              href={award.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {award.livePreview && (
            <a
              href={award.livePreview}
              aria-label='live preview'
              className='link link--icon'
            > 
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>

      <div>
        <dialog 
        ref={modalRef}
        className='modal'
        >
          <h3>{award.name}</h3>
          <p className='modal__description'>{award.detail_description}</p>
          <p>수여일자 : {award.date_of_award}</p>
          <p className="modal__role">나의 역할<br/></p>
          <p className='modal__my_role'>{award.my_role}</p>

          <button type='button'
            onClick={() => modalRef.current.close()}
          >
            Close
          </button>
        </dialog>
      </div>

    </section>
  )
}
export default AwardContainer

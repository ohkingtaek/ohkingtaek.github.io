import { useRef } from "react";
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './PaperContainer.css'

function PaperContainer({ paper }) {
  const modalRef = useRef();

  return (
    <section>
      <div className='paper'>
        <div
        onClick={() => modalRef.current.showModal()} aria-hidden="true"
        >
          <h3>{paper.name}</h3>
          <p className='paper__description'>{paper.description}</p>
          {paper.keywords && (
            <ul className='paper__stack'>
              {paper.keywords.map((item) => (
                <li key={uniqid()} className='paper__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div>
          {paper.sourceCode && (
            <a
              href={paper.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {paper.livePreview && (
            <a
              href={paper.livePreview}
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}
        </div>

        <div>
            <dialog 
            ref={modalRef}
            className='modal'
            >
              <h3>{paper.name}</h3>
              <p className='modal__description'>{paper.detail_description}</p>
              <p>게재일자 : {paper.date_of_publish}</p>
              <p className="modal__role">나의 역할<br/></p>
              <p className='modal__my_role'>{paper.my_role}</p>

              <button type='button'
                onClick={() => modalRef.current.close()}
              >
                Close
              </button>
            </dialog>
          </div>
      </div>
    </section>
  )
}

export default PaperContainer

import { useRef } from "react";
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

function ProjectContainer({ project }) {
  const modalRef = useRef();

  return (
    <section>
      <div className='project'>
        <div
        onClick={() => modalRef.current.showModal()} aria-hidden="true"
        >
        <h3>{project.name}</h3>
        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}
        </div>

        <div>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
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
            <h3>{project.name}</h3>
            <p className='modal__description'>{project.detail_description}</p>
            <p>프로젝트 수행 기간 : {project.project_duration}</p>
            <p className="modal__role">나의 역할<br/></p>
            <p className='modal__my_role'>{project.my_role}</p>

            <button type='button'
              onClick={() => modalRef.current.close()}
              className="mx-auto px-5 py-2 w-full outline-none"
            >
              Close
            </button>
          </dialog>
        </div>
    </section>
  )
}

export default ProjectContainer

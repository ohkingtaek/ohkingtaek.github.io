import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './AwardContainer.css'

const AwardContainer = ({ award }) => (
  <div className='award'>
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
)

export default AwardContainer

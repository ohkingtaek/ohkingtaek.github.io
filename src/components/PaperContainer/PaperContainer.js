import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './PaperContainer.css'

const PaperContainer = ({ paper }) => (
  <div className='paper'>
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
)

export default PaperContainer

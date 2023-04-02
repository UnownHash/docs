import { GitHubIcon, DescriptionIcon } from './Icons'

export function SourceLink({ git_href, docs_href }) {
  return (
    <p style={{ display: 'flex' }}>
      <GitHubIcon />{' '}
      <a
        href={git_href}
        className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        Source
      </a>{' '}
      <DescriptionIcon />{' '}
      <a
        href={docs_href}
        className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        {' '}
        Docs
      </a>
    </p>
  )
}

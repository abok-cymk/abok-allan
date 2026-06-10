import { FolderGit } from 'lucide-react'
import { Tag } from './Tag'

export function ProjectCard({ project }) {
    const { title, description, tags, repoUrl, demoUrl } = project

    return (
        <article className='group flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-accent/40 transition-all duration-200 hover:shadow-sm'>
            <div className='flex items-start justify-between gap-2'>
                <h3 className='text-base font-semibold text-text-primary-light dark:text-text-primary-dark group-hover:text-accent transition-colors duration-150'>
                    {repoUrl ? (
                        <a
                            href={repoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='focus:outline-none focus-visible:underline'
                        >
                            {title}
                        </a>
                    ) : title}
                </h3>
                <div className='flex items-center gap-2 shrink-0 text-text-muted-light dark:text-text-muted-dark'>
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`${title} source code`}
                            title='Source'
                            className='hover:text-accent transition-colors text-base leading-none'
                        >
                            <FolderGit size={18} />
                        </a>
                    )}

                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`${title} demo URL`}
                            title='Demo'
                            className='hover:text-accent hover:border-accent transition-colors text-xs font-mono border border-current rounded px-1.5 py-0.5'
                        >
                            demo
                        </a>
                    )}
                </div>
            </div>

            <p className='text-sm leading-relaxed text-text-muted-light dark:text-text-muted-dark flex-1'>
                {description}
            </p>
            <div className='flex flex-wrap gap-1.5 pt-1'>
                {tags.map(tag => (
                    <Tag key={tag} label={tag} />
                ))}
            </div>
        </article>
    )
}
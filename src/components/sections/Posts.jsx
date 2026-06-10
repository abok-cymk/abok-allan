import { posts } from '../../data/posts'
import { SectionHeader } from '../ui/SectionHeader'

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    })
}

export function Posts() {
    return (
        <section id='writing' className='py-12 px-6 max-w-7xl mx-auto'>
            <SectionHeader title="Writing" description="Notes on JavaScript, frontend craft, and software." />

            <ol className='space-y-0 divide-y divide-border-light dark:divide-border-dark'>
                {posts.map(({ id, date, title, url }) => (
                    <li key={id} className='group py-3.5 flex items-baseline gap-4'>
                        <time
                            dateTime={date}
                            className='font-mono text-xs shrink-0 tabular-nums text-text-muted-light dark:text-text-muted-dark'
                        >
                            {formatDate(date)}
                        </time>

                        <a
                            href={url}
                            className='text-sm leading-snug text-text-primary-light dark:text-text-primary-dark group-hover:text-accent transition-colors duration-150'
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ol>
        </section>
    )
}
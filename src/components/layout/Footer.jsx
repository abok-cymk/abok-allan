const SOCIAL_LINKS = [
    { label: 'Github', url: 'https://github.com/abok-cymk' },
    { label: 'Frontend Mentor', url: 'https://www.frontendmentor.io/profile/abok-cymk' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/allan-abok-28945a330/' },
    { label: 'Twitter', url: 'https://x.com/abokallan22' },
    { label: 'Email', url: 'mailto:abokallan22@gmailcom' },
]

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-border-light dark:border-border-dark mt-24">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-mono">
                    @ {year} Allan Abok ❤️ - Built with React + Tailwind CSS v4
                </p>

                <nav className="flex items-center gap-4" aria-label="Social links">
                    {SOCIAL_LINKS.map(({ label, url }) => (
                        <a
                            key={label}
                            href={url}
                            target={url.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark hover:text-accent transition-colors duration-150"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    )
}
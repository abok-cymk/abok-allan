import { useEffect, useState } from "react";
import { ThemeToggle } from '../ui/ThemeToggle'
import { use } from "react";
import { cn } from "../../utils/cn";

const NAV_LINKS = [
    { label: 'Projects', href: '#projects' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={cn(
            'sticky top-0 z-50 w-full',
            'bg-bg-light/90 dark:bg-bg-dark/90',
            'backdrop-blur-sm',
            'transition-all duration-200',
            scrolled
                ? 'border-b border-border-light dark:border-border-dark'
                : 'border-b border-transparent'
        )}>
            <nav
                className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-end"
                aria-label="Main navigation"
            >

                <div className="flex items-center gap-1">
                    <ul className="hidden sm:flex items-center gap-0.5 mr-2">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="px-3 py-1.5 rounded text-sm text-text-muted-light dark:text-text-muted-dark hover:text-text-primary-light dark:hover:text-text-primary-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors duration-150"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}
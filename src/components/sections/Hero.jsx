import { ArrowRight } from "lucide-react"
import Allan from "/allan_profile.jpeg"

const PROFILE_LINKS = [
    { label: 'Github', url: 'https://github.com/abok-cymk', external: true },
    { label: 'Frontend Mentor', url: 'https://www.frontendmentor.io/profile/abok-cymk', external: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/allan-abok-28945a330/', external: true },
    { label: 'Resume', url: 'https://drive.google.com/file/d/1ubWEE3WPSbfClcehAKd29Vfc_9ueJF_5/view', external: true },
    { label: 'Email', url: 'mailto:abokallan22@gmail.com', external: false },
]

export function Hero() {
    return (
        <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
            <div className="flex gap-6 mb-6">
                <div className="w-48 h-48 rounded overflow-hidden shriink-0 ring-2 ring-border-light dark:ring-border-dark">
                    <img
                        src={Allan}
                        alt="Allan Abok"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-4xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                        Allan Abok
                    </h1>

                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-mono">
                        Frontend Developer
                    </p>

                    <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-10" aria-label="Profile links">
                        {PROFILE_LINKS.map(({ label, url, external }) => (
                            <a
                                key={label}
                                href={url}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noopener noreferrer' : undefined}
                                className="text-sm text-accent hover:text-accent-hover underline underline-offset-2 decoration-accent/30 hover:decoration-accent transition-colors duration-150"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    )
}
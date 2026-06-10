import { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";

const EMAIL = 'abokallan22@gmail.com'

export function Contact() {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)

            setTimeout(() => setCopied(false), 2000)
        } catch {
            window.location.href = `mailto:${EMAIL}`
        }
    }

    return (
        <section id="contact" className="py-12 px-6 max-w-7xl mx-auto">
            <SectionHeader
                title="Get in Touch"
                description="Open to full-time roles and interesting conversations."
            />

            <div className="p-6 rounded-lg border space-y-4 border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
                <p className="text-sm leading-relaxed text-text-muted-light dark:text-text-muted-dark">
                    The best way to reach me is email. I typically respond within a day or two.
                    If you're recruiting, please include the role title and company name - it helps me respond faster.
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                    <a
                        href={`mailto:${EMAIL}`}
                        className="text-sm font-mono text-accent hover:text-accent-hover underline underline-offset-2 decoration-accent/30 hover:decoration-accent transition-colors duration-150"
                    >
                        {EMAIL}
                    </a>

                    <button
                        onClick={handleCopy}
                        aria-label="Copy email address"
                        className="text-sm font-mono px-2 py-1 rounded border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:border-accent hover:text-accent transition-colors duration-150"
                    >{copied ? '✓ copied' : 'copy'}</button>
                </div>
            </div>
        </section>
    )
}
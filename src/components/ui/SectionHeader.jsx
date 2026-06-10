export function SectionHeader({ title, description }) {
    return (
        <div className="mb-8">
            <h2 className="text-base font-semibold font-mono mb-1 text-text-primary-light dark:text-text-primary-dark">
                {title}
            </h2>
            {description && (
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    {description}
                </p>
            )}

        </div>
    )
}

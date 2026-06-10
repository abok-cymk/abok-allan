import { cn } from "../../utils/cn";

export function Tag({ label, active = false, onClick }) {
    const isClickable = typeof onClick === 'function'

    return (
        <span
            onClick={onClick}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={isClickable ? (e) => e.key === 'Enter' && onClick() : undefined}
            className={cn(
                'inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-medium',
                'border transition-colors duration-150 select-none',
                isClickable && 'cursor-pointer',
                active
                    ? 'bg-accent text-white border-accent'
                    : 'bg-transparent text-text-muted border-border dark:border-border-dark',
                isClickable && !active && 'hover:border-accent hover:text-accent',

            )}
        >
            {label}
        </span>
    )
}
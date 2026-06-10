import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
    const { isDark, toggle } = useTheme()

    return (
        <button
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="
                p-2 rounded-md text-sm font-mono
                text-text-muted-light dark:text-text-muted-dark
                hover:text-text-primary-light dark:hover:text-text-primary-dark
                hover:bg-surface-light dark:hover:bg-surface-dark
                transition-colors duration-150 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-accent
            "
        >
            {isDark ? <Sun /> : <Moon />}
        </button>
    )
}
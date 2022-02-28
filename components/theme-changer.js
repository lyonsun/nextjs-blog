import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, systemTheme, setTheme } = useTheme()

    console.log(theme, systemTheme)

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() => setTheme((theme === 'system' && systemTheme === 'dark') || theme === 'dark' ? 'light' : 'dark')}
        >
            <i className={`fa-solid text-2xl ${(theme === 'system' && systemTheme === 'dark') || theme === "dark" ? 'fa-sun text-yellow' : 'fa-moon text-jet'}`} />
        </button>
    )
}

export default ThemeChanger
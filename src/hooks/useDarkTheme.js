import { useState, useEffect } from 'react'

export default function useDarkTheme() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme'),
  )
  const colorTheme = currentTheme === 'dark' ? 'light' : 'dark'
  useEffect(() => {
    const root = window.document.documentElement.classList
    root.remove(colorTheme)
    root.add(currentTheme)
    localStorage.setItem('theme', currentTheme ? currentTheme : 'dark')
  }, [currentTheme, colorTheme])
  return [colorTheme, setCurrentTheme]
}

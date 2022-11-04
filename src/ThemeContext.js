import React, { useContext, useState } from 'react'
// Contexts passes down props to the children components
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

// Custom hooks to access the contexts (useTheme, useThemeUpdate)
export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)
  
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    /* Inside the provider we have all the component which need access to the context */
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // even if methods not defined, we can define them now
  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // to conduct change in theme through hooks
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">  
              {/* ThemeBtn */}
              <ThemeBtn />
            </div>
              <div className="w-full max-w-sm mx-auto">
            </div>
            {/* CardBtn */}
            <Card />
          </div>
        </div>
    </ThemeProvider>
    </>
  )
}

export default App

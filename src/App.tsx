import { useStore } from '@nanostores/react'

import logo from './assets/icons/logo.svg'
import { FontFamilySelector } from './components/font-family-selector'
import { SearchBox } from './components/search-box'
import { SearchResults } from './components/search-results'
import { ThemeSwitch } from './components/theme-switch'
import { useDictionary } from './hooks/use-dictionary.hook'
import { $fontFamily } from './store/settings'

function App() {
  const { isLoading, wordDefs } = useDictionary()
  const fontFamily = useStore($fontFamily)

  return (
    <main
      className={`p-6 bg-white dark:bg-[#050505] transition-colors h-screen overflow-y-auto ${fontFamily}`}
    >
      <header className="flex justify-between mb-6">
        <img
          className="h-8 w-auto md:w-8 md:h-auto"
          src={logo}
          alt="app logo"
        />
        <div className="flex items-center gap-4">
          <FontFamilySelector />
          <div className="w-[1px] h-8 bg-[#E9E9E9]" />
          <ThemeSwitch />
        </div>
      </header>
      <SearchBox />
      {isLoading && <p>loading...</p>}
      {!isLoading && wordDefs && <SearchResults wordDefs={wordDefs} />}
    </main>
  )
}

export default App

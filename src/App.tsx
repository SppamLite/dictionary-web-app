import './App.css'
import { SearchBox } from './components/search-box'
import { SearchResults } from './components/search-results'
import { useDictionary } from './hooks/use-dictionary.hook'

function App() {
  const { isLoading, wordDefs } = useDictionary()

  return (
    <div>
      <div>Dictionary</div>
      <SearchBox />
      {isLoading && <p>loading...</p>}
      {!isLoading && wordDefs && <SearchResults wordDefs={wordDefs} />}
    </div>
  )
}

export default App

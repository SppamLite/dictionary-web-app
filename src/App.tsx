import './App.css'
import { SearchBox } from './components/search-box'
import { useDictionary } from './hooks/use-dictionary.hook'

function App() {
  const { data: wordDefs, isLoading } = useDictionary()

  return (
    <div>
      <div>Dictionary</div>
      <SearchBox />
      {isLoading && <p>loading...</p>}
      {wordDefs &&
        wordDefs.map((def) => (
          <div>
            <p>{def.word}</p>
            <p>{def.phonetic}</p>
            <div>
              {def.meanings.map((meaning) => (
                <div>{meaning.definitions[0].definition}</div>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default App

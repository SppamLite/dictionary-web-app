import { nanoid } from 'nanoid'
import { WordDef } from '../types/word-def.type'

type Props = {
  wordDefs: WordDef[]
}

export const SearchResults = ({ wordDefs }: Props) => {
  if (wordDefs.length === 0) {
    return <div>empty result</div>
  }
  return wordDefs.map((def) => (
    <div key={nanoid()}>
      <p>{def.word}</p>
      <p>{def.phonetic}</p>
      <div>
        {def.meanings.map((meaning) => (
          <div key={nanoid()}>{meaning.definitions[0].definition}</div>
        ))}
      </div>
    </div>
  ))
}

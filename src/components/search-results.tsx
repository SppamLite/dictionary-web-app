import { nanoid } from 'nanoid'
import { WordDef } from '../types/word-def.type'
import { useStore } from '@nanostores/react'
import { $fontFamily } from '../store/settings'

type Props = {
  wordDefs: WordDef[]
}

export const SearchResults = ({ wordDefs }: Props) => {
  const fontFamily = useStore($fontFamily)

  if (wordDefs.length === 0) {
    return <div>empty result</div>
  }

  return wordDefs.map((def) => (
    <div key={nanoid()}>
      <h2
        className={`text-[2rem] ${fontFamily} text-black dark:text-white font-bold`}
      >
        {def.word}
      </h2>
      <p className="text-lg text-purple">{def.phonetic}</p>
      <div>
        {def.meanings.map((meaning) => (
          <div key={nanoid()}>{meaning.definitions[0].definition}</div>
        ))}
      </div>
    </div>
  ))
}

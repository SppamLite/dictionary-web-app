import { nanoid } from 'nanoid'

import { Phonetic, WordDef } from '../types/word-def.type'
import { AudioPlayButton } from './audio-play-button'
import { WordMeaning } from './word-meaning'

type Props = {
  wordDefs: WordDef[]
}

const getAudioUrl = (phonetics: Phonetic[]) => {
  const audioList = phonetics
    .filter(({ audio }) => !!audio)
    .map(({ audio }) => audio)
  return audioList.length > 0 ? audioList[0] : undefined
}

export const SearchResults = ({ wordDefs }: Props) => {
  if (wordDefs.length === 0) {
    return <div>empty result</div>
  }

  return (
    <div className="mt-6">
      {wordDefs.map((def) => (
        <div key={nanoid()}>
          <div className="flex items-center mb-8">
            <div>
              <h2 className="text-[2rem] md:text-[4rem] text-black dark:text-white font-bold transition-colors">
                {def.word}
              </h2>
              <p className="text-lg md:text-2xl text-purple">{def.phonetic}</p>
            </div>
            <AudioPlayButton audioUrl={getAudioUrl(def.phonetics)} />
          </div>
          <div className="flex gap-8 flex-col">
            {def.meanings.map((meaning) => (
              <WordMeaning key={nanoid()} meaning={meaning} />
            ))}
          </div>
          <div className="border-t border-[#E9E9E9] dark:border-[#3A3A3A] transition-colors pt-6 mt-8">
            <h4 className="text-[#757575]">Source</h4>
            {def.sourceUrls.map((url) => (
              <p
                className="text-black dark:text-white transition-colors"
                key={nanoid()}
              >
                {url}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

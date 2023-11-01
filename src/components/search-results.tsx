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
    <div className="mt-6 md:mt-11">
      {wordDefs.map((def) => (
        <div key={nanoid()} className="flex flex-col gap-8 md:gap-10">
          <div className="flex items-center">
            <div>
              <h2 className="text-[2rem] md:text-[4rem] text-black dark:text-white font-bold transition-colors">
                {def.word}
              </h2>
              <p className="text-lg md:text-2xl text-purple font-sans">
                {def.phonetic}
              </p>
            </div>
            <AudioPlayButton audioUrl={getAudioUrl(def.phonetics)} />
          </div>
          <div className="flex gap-8 flex-col">
            {def.meanings.map((meaning) => (
              <WordMeaning key={nanoid()} meaning={meaning} />
            ))}
          </div>
          <div className="border-t border-[#E9E9E9] dark:border-[#3A3A3A] transition-colors pt-6">
            <h4 className="text-[#757575]">Source</h4>
            {def.sourceUrls.map((url) => (
              <a
                className="text-black dark:text-white transition-colors hover:underline flex items-center gap-2"
                key={nanoid()}
                href={url}
                target="_blank"
              >
                {url}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="#838383"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

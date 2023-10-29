import { nanoid } from 'nanoid'

import { Meaning } from '../types/word-def.type'
import { WordSynonyms } from './word-synonyms'

type Props = {
  meaning: Meaning
}

export const WordMeaning = ({ meaning }: Props) => {
  return (
    <article>
      <div className="flex items-center gap-8 mb-8">
        <span
          className={`text-lg font-bold md:text-2xl text-black dark:text-white transition-colors italic`}
        >
          {meaning.partOfSpeech}
        </span>
        <span className="bg-[#E9E9E9] dark:bg-[#3A3A3A] transition-colors w-full h-[1px]" />
      </div>
      <h3 className="text-base md:text-xl text-[#757575] font-normal">
        Meaning
      </h3>
      {meaning.definitions.length > 0 && (
        <ul className="list-disc list-inside marker:text-purple mt-[17px]">
          {meaning.definitions.map((d) => (
            <li
              key={nanoid()}
              className="text-black dark:text-white transition-colors [&:not(:last-of-type)]:mb-[13px]"
            >
              {d.definition}
            </li>
          ))}
        </ul>
      )}
      {meaning.synonyms && <WordSynonyms synonyms={meaning.synonyms} />}
    </article>
  )
}

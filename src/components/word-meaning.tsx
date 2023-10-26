import { useStore } from '@nanostores/react'
import { Meaning } from '../types/word-def.type'
import { $fontFamily } from '../store/settings'
import { nanoid } from 'nanoid'

type Props = {
  meaning: Meaning
}

export const WordMeaning = ({ meaning }: Props) => {
  const fontFamily = useStore($fontFamily)
  return (
    <article>
      <div className="flex items-center gap-8">
        <span
          className={`${fontFamily} text-lg font-bold md:text-2xl text-black dark:text-white transition-colors`}
        >
          {meaning.partOfSpeech}
        </span>
        <span className="bg-[#E9E9E9] dark:bg-[#3A3A3A] transition-colors w-full h-[1px]" />
      </div>
      <h3
        className={`${fontFamily} text-base md:text-xl text-[#757575] font-normal`}
      >
        Meaning
      </h3>
      {meaning.definitions.length > 0 && (
        <ul>
          {meaning.definitions.map((d) => (
            <li
              key={nanoid()}
              className="text-black dark:text-white transition-colors"
            >
              {d.definition}
            </li>
          ))}
        </ul>
      )}
      <h3
        className={`${fontFamily} text-base md:text-xl text-[#757575] font-normal`}
      >
        Synonyms <span></span>
      </h3>
    </article>
  )
}

import { nanoid } from 'nanoid'
import { useCallback } from 'react'

type Props = {
  synonyms: string[]
}

export const WordSynonyms = ({ synonyms }: Props) => {
  const onClick = useCallback(
    (word: string) => () => {
      window.location.assign(`/?word=${word}`)
    },
    [],
  )

  if (!synonyms.length) return null

  return (
    <h3 className="text-base md:text-xl text-[#757575] font-normal">
      Synonyms
      {synonyms.map((s, index) => (
        <span
          className="text-purple font-bold cursor-pointer hover:underline"
          key={nanoid()}
          onClick={onClick(s)}
        >
          {s}
          {index !== synonyms.length - 1 && ', '}
        </span>
      ))}
    </h3>
  )
}

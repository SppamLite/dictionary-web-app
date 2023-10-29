import { nanoid } from 'nanoid'

type Props = {
  synonyms: string[]
}

export const WordSynonyms = ({ synonyms }: Props) => {
  if (!synonyms.length) return null

  return (
    <h3 className="text-base md:text-xl text-[#757575] font-normal">
      Synonyms
      {synonyms.map((s, index) => (
        <span className="text-purple font-bold" key={nanoid()}>
          {s}
          {index !== synonyms.length - 1 && ','}
        </span>
      ))}
    </h3>
  )
}

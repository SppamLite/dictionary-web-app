export type Phonetic = {
  text: string
  audio?: string
}

type Definition = {
  definition: string
  example: string
  synonyms: string[]
  antonyms: string[]
}

export type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
}

export type WordDef = {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  sourceUrls: string[]
}

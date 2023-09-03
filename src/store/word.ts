import { atom } from 'nanostores'

export const $word = atom<string>('')

export function setWord(word: string) {
  $word.set(word)
}

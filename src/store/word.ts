import { atom } from 'nanostores'

export const $word = atom<string>('')

export const setWord = (word: string) => $word.set(word)

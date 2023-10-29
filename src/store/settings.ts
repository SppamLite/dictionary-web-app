import { atom } from 'nanostores'

import { FontFamily } from '../types/font-families.type'

export const $fontFamily = atom<FontFamily>('font-sans')

export const setFontFamily = (fontFamily: FontFamily) =>
  $fontFamily.set(fontFamily)

import { persistentAtom } from '@nanostores/persistent'

import { FontFamily } from '../types/font-families.type'

export const $fontFamily = persistentAtom<FontFamily>(
  'settings-font-family',
  'font-sans',
)

export const setFontFamily = (fontFamily: FontFamily) =>
  $fontFamily.set(fontFamily)

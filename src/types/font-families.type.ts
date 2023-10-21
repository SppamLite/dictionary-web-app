export const fontFamilies = ['font-sans', 'font-serif', 'font-mono'] as const

export type FontFamily = (typeof fontFamilies)[number]

import { useStore } from '@nanostores/react'
import { useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import { ofetch } from 'ofetch'
import { WordDef } from '../types/word-def.type'
import { $word } from '../store/word'

export const useDictionary = () => {
  const word = useStore($word)

  const queryFn = useCallback(async () => {
    if (!word) return null
    const data = await ofetch<WordDef[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    )
    return data
  }, [word])

  const { data, isLoading } = useQuery({
    queryKey: ['words', word],
    queryFn,
    networkMode: 'offlineFirst',
  })

  return {
    data,
    isLoading,
  }
}

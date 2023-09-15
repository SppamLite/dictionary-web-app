import { useCallback, useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import { ofetch } from 'ofetch'

import { $word } from '../store/word'
import { db } from '../db/db'
import { WordDef } from '../types/word-def.type'

export const useDictionary = () => {
  const word = useStore($word)
  const [isLoading, setIsLoading] = useState(false)
  const [wordDefs, setWordDefs] = useState<WordDef[]>([])

  const addToCache = useCallback(async (wordDefs: WordDef[]) => {
    await db.words.bulkAdd(wordDefs)
  }, [])

  const fetchWordDefs = useCallback(async () => {
    const results = await db.words.where('word').equals(word).toArray()
    if (results && results.length > 0) {
      setWordDefs(results)
      return
    }

    const defs = await ofetch<WordDef[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    )
    if (defs && defs.length > 0) {
      await addToCache(defs)
    }
    setWordDefs(defs)
    setIsLoading(false)
  }, [word, addToCache])

  useEffect(() => {
    if (!word) {
      setWordDefs([])
      return
    }

    fetchWordDefs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word])

  return {
    isLoading,
    wordDefs: wordDefs,
  }
}

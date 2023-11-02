import { useStore } from '@nanostores/react'
import { FetchError, ofetch } from 'ofetch'
import { useCallback, useEffect, useState } from 'react'

import { db } from '../db/db'
import { $word } from '../store/word'
import { WordDef } from '../types/word-def.type'

type DictError = null | 'NotFound' | 'NetworkError' | 'UnknownError'

export const useDictionary = () => {
  const word = useStore($word)
  const [dictError, setDictError] = useState<DictError>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [wordDefs, setWordDefs] = useState<WordDef[]>([])

  const addToCache = useCallback(async (wordDefs: WordDef[]) => {
    await db.words.bulkAdd(wordDefs)
  }, [])

  const fetchWordDefs = useCallback(async () => {
    setDictError(null)
    setIsLoading(true)
    const results = await db.words.where('word').equals(word).toArray()
    if (results && results.length > 0) {
      setWordDefs(results)
      setIsLoading(false)
      return
    }

    try {
      const defs = await ofetch<WordDef[]>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      )

      if (defs && defs.length > 0) {
        await addToCache(defs)
      }
      setWordDefs(defs)
    } catch (error) {
      if (!(error instanceof FetchError)) {
        setDictError('UnknownError')
        return
      }
      if (error.status === 404 || error.statusCode === 404) {
        setDictError('NotFound')
        return
      }
      setDictError('NetworkError')
    } finally {
      setIsLoading(false)
    }
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
    dictError,
  }
}

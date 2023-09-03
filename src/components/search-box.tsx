import { ChangeEventHandler, useCallback, useEffect } from 'react'
import { useStateParams } from '../hooks/use-state-params.hook'
import { setWord } from '../store/word'
import { useDebounce } from '../hooks/use-debounce.hook'

type Handler = ChangeEventHandler<HTMLInputElement>

export const SearchBox = () => {
  const [inputWord, setInputWord] = useStateParams<string>(
    'keyboard',
    'word',
    (s) => s,
    (s) => s,
  )
  const debouncedWord = useDebounce<string>(inputWord, 500)

  const handleSearch: Handler = useCallback(
    ({ currentTarget }) => setInputWord(currentTarget.value),
    [setInputWord],
  )

  useEffect(() => {
    setWord(debouncedWord)
  }, [debouncedWord])

  return <input onChange={handleSearch} defaultValue={inputWord} />
}

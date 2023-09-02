import { ChangeEventHandler, useCallback } from 'react'
import { useStateParams } from '../hooks/use-state-params.hooks'

type Handler = ChangeEventHandler<HTMLInputElement>

export const SearchBox = () => {
  const [word, setWord] = useStateParams<string>(
    'keyboard',
    'word',
    (s) => s.toString(),
    (s) => s,
  )

  const handleSearch: Handler = useCallback(
    ({ currentTarget }) => setWord(currentTarget.value),
    [setWord],
  )

  return <input onChange={handleSearch} defaultValue={word} />
}

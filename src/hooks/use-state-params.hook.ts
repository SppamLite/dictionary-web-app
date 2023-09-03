import { createBrowserHistory } from 'history'
import { useEffect, useState } from 'react'

/**
 * Copied from https://pierrehedkvist.com/posts/react-state-url
 * with tiny modification
 */
export function useStateParams<T>(
  initialState: T,
  paramsName: string,
  serialize: (state: T) => string,
  deserialize: (state: string) => T,
): [T, (state: T) => void] {
  const history = createBrowserHistory()
  const search = new URLSearchParams(history.location.search)

  const existingValue = search.get(paramsName)
  const [state, setState] = useState<T>(
    existingValue ? deserialize(existingValue) : initialState,
  )

  useEffect(() => {
    // Updates state when user navigates backwards or forwards in browser history
    if (existingValue && deserialize(existingValue) !== state) {
      setState(deserialize(existingValue))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existingValue])

  const onChange = (s: T) => {
    setState(s)
    const searchParams = new URLSearchParams(history.location.search)
    searchParams.set(paramsName, serialize(s))
    const pathname = history.location.pathname
    history.push({ pathname, search: searchParams.toString() })
  }

  return [state, onChange]
}

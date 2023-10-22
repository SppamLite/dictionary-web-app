import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export const ThemeSwitch = () => {
  const { isDarkMode, toggle } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={toggle}
      />
      <div className="relative w-10 h-5 bg-[#757575] transition-colors rounded-full peer after:content-[''] after:absolute after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:left-[3px] after:top-1/2 after:-translate-y-1/2 after:transition-all peer-checked:bg-purple peer-checked:after:translate-x-[20px]"></div>
      <span>
        <svg
          className="ml-3"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
            stroke={isDarkMode ? '#A445ED' : '#757575'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </label>
  )
}

import { useCallback, useRef } from 'react'

type Props = {
  audioUrl?: string
}
export const AudioPlayButton = ({ audioUrl }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const onClick = useCallback(() => {
    if (!audioRef.current) return
    audioRef.current.play()
  }, [])

  if (!audioUrl) return null

  return (
    <div className="ml-auto">
      <audio className="sr-only" ref={audioRef} src={audioUrl} />
      <button onClick={onClick} className="group">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
            className="w-12 h-12 md:w-auto md:h-auto"
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle
                className="group-hover:opacity-100 transition-opacity"
                cx="37.5"
                cy="37.5"
                r="37.5"
                opacity=".25"
              />
              <path
                className="group-hover:fill-white transition-colors"
                d="M29 27v21l21-10.5z"
              />
            </g>
          </svg>
        </span>
      </button>
    </div>
  )
}

import { useClick, useFloating, useInteractions } from '@floating-ui/react'
import { useStore } from '@nanostores/react'
import { useState } from 'react'
import { useCallback } from 'react'
import { MouseEventHandler } from 'react'

import { $fontFamily, setFontFamily } from '../store/settings'
import { FontFamily, fontFamilies } from '../types/font-families.type'

const fontFamilyNames = {
  'font-sans': 'Sans Serif',
  'font-serif': 'Serif',
  'font-mono': 'Mono',
}

type Handler = MouseEventHandler<HTMLButtonElement>

export const FontFamilySelector = () => {
  const fontFamily = useStore($fontFamily)
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  })

  const click = useClick(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click])

  const onChangeFontFamily = useCallback<Handler>(({ currentTarget }) => {
    const value = currentTarget.value as FontFamily
    setFontFamily(value)
    setIsOpen(false)
  }, [])

  return (
    <div className="text-black dark:text-white font-bold">
      <button
        type="button"
        className="text-sm inline-flex items-center"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <span>{fontFamilyNames[fontFamily]}</span>
        <svg
          className="ml-4"
          width="13"
          height="9"
          viewBox="0 0 13 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#A445ED" strokeWidth="1.5" />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="bg-white dark:bg-[#1F1F1F] flex flex-col p-6 gap-4 rounded-2xl shadow-[0_5px_30px_0_rgba(0,0,0,0.10)] dark:shadow-purple"
        >
          {fontFamilies.map((f) => (
            <button
              key={f}
              type="button"
              className={`${f} hover:text-purple transition-colors`}
              value={f}
              onClick={onChangeFontFamily}
            >
              {fontFamilyNames[f]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

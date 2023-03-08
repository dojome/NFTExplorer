import React from 'react'
import cx from 'classnames'
import { getBackgroundColor } from './utils'

export function Button({ className, label, onClick, type }) {
  const classNames = cx(
    className,
    'text-pink-500 border border-slate-800 rounded-full px-5 py-3',
    getBackgroundColor(type)
  )
  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  )
}

import React, { useState } from 'react'
import cx from 'classnames'
import { SearchIcon } from '../Icons'

export function SearchBox({ className, placeholder, setValue }) {
  const [address, setAddress] = useState('')
  const handleChange = event => {
    setAddress(event.target.value)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setValue(address)
    }
  }
  return (
    <div className={cx(className, 'flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3')}>
      <SearchIcon className="stroke-pink-500" />
      <input
        className="w-full bg-transparent text-lg font-medium text-pink-500 caret-pink-500 outline-none placeholder:text-pink-300"
        placeholder={placeholder}
        value={address}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

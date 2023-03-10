import React, { useState } from 'react'
import cx from 'classnames'
import { SearchIcon, LoadingIcon } from '../Icons'

export function SearchBox({ className, placeholder, setValue, loading }) {
  const [address, setAddress] = useState('')
  const handleChange = event => {
    setAddress(event.target.value)
    if (event.target.value === '') {
      setValue('')
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      setValue(address)
    }
  }
  const handleSearch = address => {
    setValue(address)
  }
  return (
    <div
      className={cx(
        className,
        'flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3',
        address ? 'border border-pink-500' : ''
      )}
    >
      <SearchIcon className="stroke-pink-500" />
      <input
        className="w-full bg-transparent text-lg font-medium text-pink-500 caret-pink-500 outline-none placeholder:text-pink-300"
        placeholder={placeholder}
        value={address}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {address && (
        <button
          className="border-l border-pink-500 pl-3 font-medium text-pink-500"
          onClick={() => handleSearch(address)}
        >
          {loading ? (
            <LoadingIcon className="mr-2 inline h-6 w-6 animate-spin fill-pink-600 text-gray-200 dark:text-gray-600" />
          ) : (
            'Search'
          )}
        </button>
      )}
    </div>
  )
}

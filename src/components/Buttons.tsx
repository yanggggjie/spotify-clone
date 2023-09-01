import { clsx } from 'clsx'
import _ from 'lodash-es'
import React from 'react'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
interface Props {}

function Component({}: Props) {
  return (
    <div
      className={clsx(
        'rounded bg-gray-800 text-white',
        'space-y-4',
        ' p-4',
        'w-56',
      )}
    >
      <button className={clsx('flex flex-row items-center gap-3')}>
        <AiFillHome></AiFillHome>
        Home
      </button>
      <button
        className={clsx(
          'flex flex-row items-center gap-3',
          'text-gray-400',
          'hover:text-white',
        )}
      >
        <AiOutlineSearch></AiOutlineSearch>
        Search
      </button>
    </div>
  )
}

export default Component

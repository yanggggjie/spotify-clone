import { clsx } from 'clsx'
import _ from 'lodash-es'
import React from 'react'
import { AiFillHeart, AiFillPlayCircle } from 'react-icons/ai'
import { BsFillTriangleFill } from 'react-icons/bs'
interface Props {}

function Component({}: Props) {
  return (
    <div
      className={clsx(
        'text-white rounded overflow-hidden',
        'flex flex-row items-center w-64 bg-gray-400',
        'relative',
        'hover:bg-gray-300',
        'group',
      )}
    >
      <div className={clsx('bg-purple-400 p-4')}>
        <AiFillHeart></AiFillHeart>
      </div>
      <div className={clsx('pl-3')}>Liked Songs</div>
      <div
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 right-4',
          'p-2.5 rounded-full bg-green-500 text-black',
          'rotate-90',
          'hover:scale-125',
          'hidden group-hover:block',
        )}
      >
        <BsFillTriangleFill></BsFillTriangleFill>
      </div>
    </div>
  )
}

export default Component

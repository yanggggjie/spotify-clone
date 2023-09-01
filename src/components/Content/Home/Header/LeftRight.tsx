import { clsx } from 'clsx'
import _ from 'lodash-es'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import React from 'react'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('text-white', 'flex flex-row items-center gap-1')}>
      <button className={clsx('p-1 bg-black rounded-full')}>
        <BsChevronLeft></BsChevronLeft>
      </button>
      <button className={clsx('p-1 bg-black rounded-full')}>
        <BsChevronRight></BsChevronRight>
      </button>
    </div>
  )
}

export default Component

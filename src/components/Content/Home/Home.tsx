import { clsx } from 'clsx'
import _ from 'lodash-es'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import React from 'react'
import LeftRight from './Header/LeftRight.tsx'
import Header from './Header/Header.tsx'
import Controller from './Controller/Controller.tsx'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('bg-green-800  rounded p-2 pl-4 space-y-2')}>
      <Header></Header>
      <Controller></Controller>
    </div>
  )
}

export default Component

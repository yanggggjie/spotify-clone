import { clsx } from 'clsx'
import _ from 'lodash-es'
import { BsMusicNoteList } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
interface Props {}

function Component({}: Props) {
  return (
    <div
      className={clsx('w-56 h-full', 'bg-gray-800 rounded text-white', 'p-4')}
    >
      <div className={clsx('flex flex-row items-center gap-2')}>
        <BsMusicNoteList></BsMusicNoteList>
        Your Library
        <div className={clsx('grow')}></div>
        <span className={clsx('text-gray-400 hover:text-white')}>
          <AiOutlinePlus></AiOutlinePlus>
        </span>
      </div>
    </div>
  )
}

export default Component

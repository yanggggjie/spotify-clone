import { clsx } from 'clsx'
import _ from 'lodash-es'
import LeftRight from './LeftRight.tsx'
import Buttons from './Buttons.tsx'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('flex flex-row')}>
      <LeftRight></LeftRight>
      <div className={'grow'}></div>
      <Buttons></Buttons>
    </div>
  )
}

export default Component

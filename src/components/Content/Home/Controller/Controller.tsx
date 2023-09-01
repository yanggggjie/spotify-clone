import { clsx } from 'clsx'
import _ from 'lodash-es'
import Like from './Like/Like.tsx'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('space-y-2')}>
      <div className={clsx('text-2xl  text-white')}>Welcome back</div>
      <Like></Like>
    </div>
  )
}

export default Component

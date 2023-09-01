import { clsx } from 'clsx'
import _ from 'lodash-es'
import Content from './components/Content/Content.tsx'
import Home from './components/Buttons.tsx'
import Library from './components/Library.tsx'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('h-screen w-screen', 'flex flex-row  p-2 gap-2')}>
      <div className={clsx('w-56 h-full flex flex-col gap-2')}>
        <Home></Home>
        <div className={clsx('grow')}>
          <Library></Library>
        </div>
      </div>
      <div className={clsx('grow')}>
        <Content></Content>
      </div>
    </div>
  )
}

export default Component

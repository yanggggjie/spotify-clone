import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <button className={clsx('text-white py-1.5 px-4 rounded-full ')}>
        Sign up
      </button>
      <button
        className={clsx(
          'text-black py-1.5 px-4 font-bold rounded-full bg-white  ',
        )}
      >
        Log in
      </button>
    </div>
  )
}

export default Component

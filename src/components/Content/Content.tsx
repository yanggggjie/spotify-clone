import { clsx } from 'clsx'
import _ from 'lodash-es'
import Home from './Home/Home.tsx'
import Search from './Search.tsx'
import { Route, Routes } from 'react-router-dom'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/search'} element={<Search />}></Route>
      </Routes>
    </div>
  )
}

export default Component

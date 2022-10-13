import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;welcome&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;How are you ne var you ?&gt;
          <br />
          <span className="bottom-tag-html">&lt;Fella&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout

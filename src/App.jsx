import { useState } from 'react'
import Search from './assets/components/Search'
import Content from './assets/components/Content'
import './assets/style.scss'

function App() {

  let [title, setTitle] = useState('')

  return (
    <>
      <div className="container">
        <Search></Search>
        <Content></Content>
      </div>
    </>
  )
}

export default App

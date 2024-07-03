import React, { useState } from 'react'
import Header from './components/Header'


function App() {

  let [data, setData] = useState([
  
  ])
  return (
    <div>
      <Header data={data} setData={setData} />


    </div>
  )
}

export default App

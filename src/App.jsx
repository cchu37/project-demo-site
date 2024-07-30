import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoalList from './GoalList'
import AWSBadge from './AWSBadge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AWSBadge />
      <GoalList />
    </>
  )
}

export default App

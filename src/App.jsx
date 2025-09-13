import { useState } from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dashboard/EmployeeDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Login /> */}
      <Employee />

    </>
  )
}

export default App

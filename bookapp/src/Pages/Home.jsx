import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to Homepage</h1>
    </div>
  )
}

export default Home
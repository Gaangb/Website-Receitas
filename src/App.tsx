import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [recipe, setRecipe] = useState("")

  async function getRecipe(){
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      console.log(response.data)
      // setRecipe(response)
    } catch (error) {
      console.log("erro")
    }
  }

  return (
    <>
      {getRecipe()}
    </>
  )
}

export default App

import { useState } from 'react'
import axios from 'axios'
import image from '../../assets/home_image.webp'
import styles from './home.module.css'

export function Home(){
      // const [recipe, setRecipe] = useState("")

  async function getRecipe(){
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      console.log(response.data)
      // setRecipe(response)
    } catch (error) {
      console.log("erro")
    }
  }

    return(
        <div className={styles.container_home}>
            <div >
                <p>teste</p>
            </div>
            <div>
                <img src={image} />
            </div>
        </div>
    )
}
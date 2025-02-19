import axios from "axios"
import {useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Foods =() =>{
    const[search,setSearch]=useState("")
    const[meals,setMeals]=useState([])
    const navigate=useNavigate();
    async function display(){
        try{
            const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            setMeals(response.data.meals || [])
            console.log(response.data.meals)
        }catch(error){
            console.error("error",error)
        }
    }
    async function randomfood(){
        try{
            const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            setMeals(response.data.meals || []);
            console.log(response.data.meals)
        }catch(error){
            console.error("error",error)
        }
    }
    useEffect(() => {
            randomfood()
        },[])
    const detail = (mealId) => {
            navigate(`/meal/${mealId}`);
          }           
   return(
        <div className="container">
            <h1>Food Recipe</h1>
            <div className="search">               
                <input id="input" type="text" placeholder="Enter Food" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button id="srbtn"onClick={display}>Search</button>
            </div>
            <div className="recipe">
            <div className="searchmeal">
    {meals.length > 0 ? (
      meals.map((meal) => (
        <div key={meal.idMeal} className="card">
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
          <button onClick={() => detail(meal.idMeal)}>View Recipe</button>
        </div>
      ))
    ) : (
      <p>No meals found</p>
    )}
                </div>
            </div>
        </div>
    )
}
            
export default Foods
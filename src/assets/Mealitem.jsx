import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import './Mealitem.css'
function Mealitem(){
    const {mealId}=useParams();
    const [desc,setDesc]=useState()
    useEffect(() =>{
        async function description(){
            try {
              const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
              setDesc(response.data.meals[0]);
            } catch (error) {
              console.error("Error fetching meal details:", error);
            }
          }
          description();
        }, [mealId]);     
        return (
          <div className="detail">
            {desc ? (
              <div>
                <h2>{desc.strMeal}</h2>
                <img
                  src={desc.strMealThumb}
                  alt={desc.strMeal}
                  width="200"
                />
                <h3>Ingredients</h3>
                <ul>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((i) =>{
                    const ingredient = desc[`strIngredient${i}`];
                    const measure = desc[`strMeasure${i}`];
                    if (ingredient) {
                      return (
                        <li key={i}>
                          {ingredient} - {measure}
                        </li>
                      );
                    }
          
                  })}
                </ul>
                <h3>Instructions</h3>
                <div>
                  {desc.strInstructions.split('.').map((step, index) => {
                    if (step.trim()){
                      return(
                      <p key={index}>
                        {index+1}.{step.trim()}
                      </p>
                      );
                    }
                  })}
                  </div>
                
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        );
      };
      
      export default Mealitem;
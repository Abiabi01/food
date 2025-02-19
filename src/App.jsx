import { BrowserRouter as Router,Route,Routes, BrowserRouter } from "react-router-dom"
import Foods from "./assets/Foods"
import Mealitem from "./assets/Mealitem"
  
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Foods/>}/>
        <Route path="/meal/:mealId" element={<Mealitem/>}/>
      </Routes>
    </BrowserRouter>

    
  )

}
export default App

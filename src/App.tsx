import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/molecules/navBar";
import { Home } from "./screens/home";
import { SearchName } from "./screens/searchName";
import { SearchByLetter } from "./screens/searchByLetter";
import { SearchByIngredient } from "./screens/searchByIngredient";
import { RecipeScreen } from "./screens/recipeScreen";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search_by_name" element={<SearchName />} />
            <Route path="/search_by_letter" element={<SearchByLetter />} />
            <Route path="/search_by_ingredient" element={<SearchByIngredient />} />
            <Route path="/recipe_by_id/:id" element={<RecipeScreen />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

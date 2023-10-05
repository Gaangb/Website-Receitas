import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/molecules/navBar";
import { Home } from "./screens/home";
import { SearchName } from "./screens/searchName";
import { SearchByLetter } from "./screens/searchByLetter";
import { SearchByIngredient } from "./screens/searchByIngredient";
import { RecipeScreen } from "./screens/recipeScreen";
import { PageNotFoundScreen } from "./screens/pageNotFoundScreen";

function App() {
  return (
    <Router>
      <div className="container_app_geral}">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search_by_name" element={<SearchName />} />
            <Route path="/search_by_letter" element={<SearchByLetter />} />
            <Route path="/search_by_ingredient" element={<SearchByIngredient />} />
            <Route path="/recipe_by_id/:id" element={<RecipeScreen />} />
            <Route path="*" element={<PageNotFoundScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

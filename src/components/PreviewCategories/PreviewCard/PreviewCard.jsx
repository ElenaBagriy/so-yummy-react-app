import { useState } from "react";
import { onCapitalise } from "services/api/onCapitalise";

export const PreviewCard = ({ category }) => {
    const [recipes, setRecipes] = useState([]);

console.log(category);
    return <div>
        <h2>{onCapitalise(category[0])}</h2>
    </div>
}
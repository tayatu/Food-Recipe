import React from "react";

const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  return (
      <div class="card py-2 text-center crdsize">
        <img src={image} className="card-img-top w-50 mx-auto" />
        <div class="card-body">
          <h5>{name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </div>
  );
};

export default RecipeItem;
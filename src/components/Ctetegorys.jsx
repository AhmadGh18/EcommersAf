import { SingleCategory } from "./SingleCategory";
import { useState, useEffect } from "react";
export const Categorys = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [Allcategory, setAllcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((products) => setAllcategory(products));
  }, []);

  function toggleClicked(index, category) {
    setClickedIndex(index === clickedIndex ? -1 : index);
    setSelectedCategory(category);
  }

  return (
    <>
      <div className="Actegorywrap">
        {Allcategory.map((el, index) => {
          const style = {
            backgroundColor: index === clickedIndex ? "#70f670" : "",
          };

          return (
            <p
              style={style}
              key={index}
              onClick={() => toggleClicked(index, el)}
            >
              {el}
            </p>
          );
        })}
      </div>
      {selectedCategory && <SingleCategory category={selectedCategory} />}
    </>
  );
};

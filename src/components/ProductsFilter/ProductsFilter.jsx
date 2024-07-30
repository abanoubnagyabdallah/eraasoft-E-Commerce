import { Button } from "react-bootstrap";
import "./ProductsFilter.css";
import { useEffect, useState } from "react";

export default function ProductsFilter({ setFilterQuery }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  function setFilterInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //http://localhost:3004/products?category=smartphones&q=iphone&price_gte=600&price_lte=1000

  function formSubmitHandler(e) {
    e.preventDefault();
    // let query = '';
    // for(let key in formData){
    //   if(formData[key] !== ''){
    //     query += `${key}=${formData[key]}&`
    //   }
    // }
    // if(query[query.length - 1] == '&') query = query.substring(0, query.length - 1)
    // setFilterQuery(query)
    let queryArr = [];
    for (let key in formData) {
      if (formData[key] !== "") {
        queryArr.push(`${key}=${formData[key]}`);
      }
    }
    setFilterQuery(queryArr.join("&"));
  }

  return (
    <form className="d-flex gap-3 mb-3" onSubmit={formSubmitHandler}>
      <input
        name="q"
        className="filter-input"
        value={formData.q || ''}
        onChange={setFilterInput}
        placeholder="Search..."
        type="text"
      />
      <select
        name="category"
        onChange={setFilterInput}
        value={formData.category || ''}
        className="filter-input"
      >
        <option value="">Choose an option</option>
        {categories.map((category) => {
          return (
            <option key={`category-item-${category}`} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <input
        name="price_gte"
        value={formData.price_gte || ''}
        onChange={setFilterInput}
        className="filter-input"
        placeholder="min price"
        type="number"
      />
      <input
        name="price_lte"
        value={formData.price_lte || ''}
        onChange={setFilterInput}
        className="filter-input"
        placeholder="max-price"
        type="number"
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button
        type="button"
        onClick={() => {
          setFilterQuery("");
          setFormData({});
        }}
      >
        Reset
      </Button>
    </form>
  );
}

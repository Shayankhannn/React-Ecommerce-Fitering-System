import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import "./index.css";
import Product from './Product/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

// database
import products from "./db/Db"
// import Category from './Sidebar/Category/Category';
import Card from './components/Card';
import Detailed_Modal from './Modal/Detailed_Modal';

const App = () => {

const [selectedCategory,setSelectedCategory] = useState(null)


// input filter
const [query,setQuery] = useState("")

const handleInputChange = event =>{
  setQuery(event.target.value)
}

// filter Item
const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);


// radio Filter

const handleChange = event =>{
  setSelectedCategory(event.target.value)
}

// Buttons Filter

const handleClick = event =>{
  setSelectedCategory(event.target.value)
}

function filteredData(products,selectedCategory,query){

let filteredProducts = products;

// input filtering

if(query){
  filteredProducts = filteredItems
}

// selected filter

if(selectedCategory){
  filteredProducts = filteredProducts.filter(({category,newPrice,color,company,title})=>
  category === selectedCategory ||
  newPrice === selectedCategory ||
  color === selectedCategory ||
  company === selectedCategory ||
  title === selectedCategory

  )}

  return filteredProducts.map(({newPrice,img,title,prevPrice,star,reviews})=>(
    <Card key={Math.random()}
    
    newPrice={newPrice}
    title={title}
    prevPrice={prevPrice}
    star={star}
    reviews={reviews}
    img={img}
    
    />
  ))

}
const result = filteredData(products,selectedCategory,query)

  return (
    <div>
      <Sidebar handleChange={handleChange}/>
<Nav query={query} handleInputChange={handleInputChange} />
<Recommended handleClick={handleClick}/>
<Product result={result}/>
<Detailed_Modal/>
    </div>
  )
}

export default App
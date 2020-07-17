import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button"
import FilterableProductTable from "./components/FilterableProductTable"

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function Root() {
  return (
    <div>
      "hello world"
      <Button />
      <FilterableProductTable products={PRODUCTS} />,
    </div>
  );
};

// Render the Root element into the DOM
ReactDOM.render(<Root />, document.getElementById("root"));

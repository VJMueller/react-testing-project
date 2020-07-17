import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button"

function Root() {
  return (
    <div>
      "hello world"
      <Button />
    </div>
  )
};

// Render the Root element into the DOM
ReactDOM.render(<Root />, document.getElementById("root"));

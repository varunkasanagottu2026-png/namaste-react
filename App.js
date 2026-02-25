import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant List
 *  - Restaurant Card
 *    - Image
 *    - Name
 *   - Rating
 *    - Cusines
 * Footer
 *  - copyright
 *  - Links
 *  - Address
 *  - Contact
 */


// React.createElement ==> ReactElement-JS Object => HTMLElement(render)

const elem =<span>React Element</span>

const title =  (
  <h1 className="head" tabIndex="1">
    {elem}
    Namaste React from using JSX
  </h1>
);
// React Functional Component - A normal JS function which returns JSX

// componet composition - using a component inside another component

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading" tabIndex="1">
      Namaste React from using Functional Component
    </h1>
  </div>
);

// JSX - is not HTML but it looks like HTML (transpiled before it reaches the JS) - PARCEL - BABEL

//JSX ==> React.createElement ==> ReactElement-JS Object => HTMLElement(render)

const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hello World from JSX
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

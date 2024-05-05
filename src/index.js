/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(<App/>, document.getElementById("root"));
console.log(`React version ${React.version}`);*/


import React from 'react';
import { createRoot } from 'react-dom';
import App from "./App";
const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<App />);

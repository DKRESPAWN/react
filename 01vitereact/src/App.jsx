import Chai from "./Chai";
import React from "react";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "My name is dkrespawn";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google",
  anotherUser
);

function App() {
  const username = "dkrespawn";

  return reactElement;
  //in {} only evaluated expression should be there
  // <>
  //   <Chai />
  //   <h2>chai aur react {username}</h2>
  //   <p>test para</p>
  // </>
}

export default App;

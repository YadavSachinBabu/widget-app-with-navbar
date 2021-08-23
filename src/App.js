import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import DropDown from "./DropDown";

const items = [
  {
    title: "Sachin Yadav",
    content: "ReactJS Intern",
  },
  {
    title: "Nirav Prajapati",
    content: "ReactJS Intern",
  },
  {
    title: "Akash Solanki",
    content: "React Native Intern",
  },
  {
    title: "Videsh Makwana",
    content: "Java Intern",
  }
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <DropDown/>
    </div>
  );
};
export default App;

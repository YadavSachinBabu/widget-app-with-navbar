import React,{useState} from "react";
// import Accordion from "./Accordion";
import Search from "./Search";
// import DropDown from "./DropDown";
import Translate from "./Translate";

// const items = [
//   {
//     title: "Sachin Yadav",
//     content: "ReactJS Intern",
//   },
//   {
//     title: "Nirav Prajapati",
//     content: "ReactJS Intern",
//   },
//   {
//     title: "Akash Solanki",
//     content: "React Native Intern",
//   },
//   {
//     title: "Videsh Makwana",
//     content: "Java Intern",
//   }
// ];

// const options=[
//   {
//     label:"The Color Is Red",
//     value:"Red"
//   },
//   {
//     label:"The Color Is Green",
//     value:"Green"
//   },
//   {
//     label:"The Color Is Orange",
//     value:"Orange"
//   }
// ]



const App = () => {
  // const [select,setSelect]=useState("")
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search/>
      {/* <DropDown select={select} setSelectChange={setSelect} options={options}/> */}
      {/* <Translate/> */}
    </div>
  );
};
export default App;

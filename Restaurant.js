import React, { useState } from "react";
import "./styles.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

// below here the new set function returns only the unique value of category and it returns objects so to get an array we have put the square brackets at the starting and still it returns the objects inside of an array so to convert the object into an array we use the spread operator.
const uniqueList = [
  ...new Set(
    Menu.map((x) => {
      return x.category;
    })
  ),
  "All",
];
// console.log(uniqueList);
const Restaurant = () => {
  // we should create hooks at the starting of the componenet.
  // hooks are the functions which starts with "use"
  // the useState hook is used to get data and hold it.
  // useState hook returns an array of two element.
  // const [state varaiable, updated function]= useState(initialData)
  // so if we change the updated function or simply invoke by passing an arguement then we can change the state variable.
  //    *******HOOKS*******
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curr) => {
      return curr.category === category;
    });
    // here we have passed the filtered list from the database to the updated data i.e. the setMenuData and it changes the current state varibale's data.
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      {/* below props is used where we have set the state varibale as an attribute and also given the value of the same state variable meanwhile the attribute can carry any name. */}
      {/* donot forget curly braces. */}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;

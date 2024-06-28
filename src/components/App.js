import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Error from "./Error";



/*const parent = React.createElement(
    "div", 
    {id : "parent"}, 
    [React.createElement("div", {id: "child1"},
         [React.createElement("h1", {id: "heading"}, "I am a h1 tag"),
         React.createElement("h2", {id: "heading"}, "I am a h2 tag")]),

    React.createElement( "div",  {id: "child2"},
             [React.createElement("h1", {id: "heading"}, "I am a h1 tag"),
             React.createElement("h2", {id: "heading"}, "I am a h2 tag")]
     )]
    )
*/

// React.craeteElement => Object => HTML Element 
 
/*const heading = React.createElement(
    "h1",
    {id: "heading"}, 
    "hello from React")

// JSX

const jsxHeading = <h1 id="heading" tabIndex={5}> React using JSX </h1>


// Functional component - NEW

let greet = "Good afternoon "

const TitleComponent = () =>(
    <h1> {greet}   React TitleComponent </h1>
)
const HeadingComponent = () => (
    <>
        <TitleComponent/>
       
        <h1 className="heading"> React Functional Component</h1>
     </>
)

*/



const AppLayout = () =>{

    return (
        <div className="app">
             <Header/>
             <Outlet/>
         </div>
       
    )
}
// creating routing configuration inside app router
// configuration - information that will define what will happpen on specific route
const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout/>,
      children: [
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/about",
      element: <About/>
   },

    {
    path: "/contact",
    element: <Contact/>
    },

    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>
    }
  
  ],
  errorElement: <Error/>
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {appRouter} />)




const parent = React.createElement(
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

 
const heading = React.createElement(
    "h1",
    {id: "heading"}, 
    "hello from React")

console.log(heading)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(heading)

root.render(parent)
const _404 = "../../404.js";

function App() {
  React.useEffect(() => {
    console.log(("init links"));
    return (() => console.log("links has been initialized"))
  })
  const [username, setUsername] = React.useState("Alam");
  const lists = [
    {name: "Profile", link: "/index.html"}, 
    {name: "Instagram", link: "https://www.instagram.com/alaam.lam/"}, 
    {name: "Github", link: "https://github.com/nourinalam"},
    {name: "Facebook", link: "https://www.facebook.com/nourinalam.dzani"},
    {name: "Youtube", link: "https://www.youtube.com/channel/UCY1M6uXwlIGgYzkgsew68Gw"},
    {name: "Email", link: "mailto:nourinalam26@gmail.com"}
  ];
  return (
    <>
      <center>
        <div className={"profile-header"}>
          <img src={"ryujin.jpg"} className={"profile-picture"}></img>
          <p style={{margin: 0}} className={"profile-username"}>{username}</p>
        </div>
      </center>
      <div className="links-container">
        {lists.map((list) => {
          return <p className="link" key={list.name} onClick={() => window.location = list.link}>{list.name}</p> 
        })}
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
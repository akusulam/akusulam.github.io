function handleLink(id) {
  if(id == "ig") {
    // window.location = "https://www.instagram.com/alaam.lam";
    alert("instagram")
  }
  else if(id == "email") alert("email");
  else if(id == "github") alert("github");
  else if(id == "facebook") alert("facebook");
  else if(id == "youtube") alert("youtube");
  else if(id == "profile") window.location = "../../../index.html"
  else PageNotFound();
}
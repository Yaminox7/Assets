var content = document.getElementById("content");

var contents = [
  ["CC0 Textures", "Google Poly", "mixamo"],
  ["itch.io", "ludum dares"],
  ["trello"]
];
var links = [
  ["https://ambientcg.com/", "https://poly.pizza/", "https://www.mixamo.com/"],
  ["https://itch.io/", "https://ludumdare.com/"],
  ["https://trello.com/u/yaminox7/boards"]
];
var roles = [
  ["free textures", "free 3D models", "free animations"],
  ["upload your games", "join game jams"],
  ["make task lists for multiple games"]
];
var themes = ["assets", "game exchange", "organizing"];

var i = 0;
contents.forEach((sub) => {
  var fieldset = document.createElement("fieldset");
  var legend = document.createElement("legend");
  legend.innerText = titleCaseOnly(themes[i]);
  fieldset.append(legend);

  var j = 0;
  sub.forEach((elem) => {
    var p = document.createElement("p");
    p.innerHTML = "<a href='" + links[i][j] + "' target='_blank'>" + titleCaseOnly(elem) + "</a>" + capitalizeOnly(roles[i][j]);
    fieldset.appendChild(p);
    j++;
  });

  content.append(fieldset);
  i++;
});
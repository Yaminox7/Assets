var content = document.getElementById("content");

var contents = [
    ["CG Geek", "Gabriel Williams", "Sebastian Lague"],
    ["Blackthornprod", "Brackeys", "TychoBolt"]
];
var links = [
    [
        "https://www.youtube.com/channel/UCG8AxMVa6eutIGxrdnDxWpQ", 
        "https://www.youtube.com/@gabriel-polysketch", 
        "https://www.youtube.com/@SebastianLague"
    ],
    [
        "https://www.blackthornprod.com/", 
        "https://www.youtube.com/@Brackeys", 
        "https://x.com/TychoBolt"
    ]
];
var roles = [
    ["learn making 3d models on blender", "learn making 3d models on probuilder", "learn rigging 3d models"],
    ["learn to use unity and c#", "learn to use unity and c#", "learn good level design"]
];
var themes = ["models", "tutorials"];

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
var content = document.getElementById("content");

var contents = [
    ["blender", "ProBuilder"],
    ["audacity", "Bosca Ceoil", "SFXR"],
    ["unity", "steam"],
    ["rider", "VSCode"],
    ["adobe premiere", "photoshop", "OBS studio"]
];
var roles = [
    ["make props and characters", "make game maps"],
    ["edit sounds", "make music", "generate SFX"],
    ["make 2d and 3d games", "upload your games"],
    ["java and C#", "all languages"],
    ["edit videos", "edit images", "record videos"]
];
var themes = ["3D models", "Audio", "games", "IDEs", "Video"];

var i = 0;
contents.forEach(sub => {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.innerText = titleCaseOnly(themes[i]);
    fieldset.append(legend);

    var j = 0;
    sub.forEach(elem => {
        var p = document.createElement("p");
        p.innerHTML = "<span class='text'>" + titleCaseOnly(elem) + "</span>" + capitalizeOnly(roles[i][j]);
        fieldset.appendChild(p);
        j++;
    });

    content.append(fieldset);
    i++;
});
function titleCase(str) {
    return str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
}

function titleCaseOnly(str) {
    return str.split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeOnly(str) {
    return str[0].toUpperCase() + str.slice(1);
}
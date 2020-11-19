// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create and populate the table on webpage

//reference to the table in html
var tbody = d3.select("tbody");

//pull in the UFO sighting data from data.js
//console.log(data);


//1. loop through UFO data and log each sighting
//2. append table rows `tr` for each sighting
//3. log each UFO sighting with Object.entries
//4. append 1 cell per UFO sighting (datetime, city, state, country, shape, durationMinutes, comments)
//5.
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        //console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});

//Create event listener that searches through datetime column for matches

var inputField = d3.select("#filter-btn");

inputField.on("click", function() {
    var inputID = d3.select("#datetime");
    var dataGiven = inputID.property("value");
    console.log(dataGiven);
    var selectedData = data.filter(ufoSighting => ufoSighting.datetime === dataGiven);
    console.log(selectedData);
    tbody.html("")

    selectedData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        //console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});


});


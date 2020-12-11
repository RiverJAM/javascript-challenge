// from data.js
var tableData = data;

// YOUR CODE HERE!


// This code is from Activity 3 day 3
// I took out console log bc it was so busy

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
var tbody = d3.select("tbody");

data.forEach(function(aliens) {
  
  var row = tbody.append("tr");

  Object.entries(aliens).forEach(function([key, value]) {
    
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
var button = d3.select("filter-btn);
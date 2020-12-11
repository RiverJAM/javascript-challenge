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
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");
// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter((person) => person.datetime === inputValue);

  console.log(filteredData);
  
  // Clear tbody
  // Got this line from Tasha in slack line.
  tbody.html("");
 
  filteredData.forEach(function(aliens) {
    
    
    var row = tbody.append("tr");
  
    Object.entries(aliens).forEach(function([key, value]) {
      
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

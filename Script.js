function loading() {
  createJsonList();
  setTimeout(() => {
    addEventToTD();
  }, 500);
}

function createJsonList() {
  fetch("./Services.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      var tableContainer = document.getElementById("tableContainer");
      tableContainer.appendChild(generateTable(data));
    });
  function generateTable(data) {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    var keys = Object.keys(data[0]);

    keys.forEach(function (key) {
      var th = document.createElement("th");
      th.textContent = key;
      headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    data.forEach(function (item) {
      var row = document.createElement("tr");

      keys.forEach(function (key) {
        var td = document.createElement("td");
        td.textContent = item[key];
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
  }
}

function addEventToTD() {
  console.log("started adding");
  var rows = document.querySelectorAll("td");
  // Add a click event listener to each row
  rows.forEach(function (row) {
    row.addEventListener("click", function () {
      // Get the text content of the row
      var text = row.textContent;

      // Copy the text to the clipboard
      navigator.clipboard.writeText(text);
    });
  });
}

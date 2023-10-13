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

function searchService() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.querySelector("Table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];
    td3 = tr[i].getElementsByTagName("td")[2];
    td4 = tr[i].getElementsByTagName("td")[3];
    td5 = tr[i].getElementsByTagName("td")[4];
    if (td1 && td2 && td3 && td4 && td5) {
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      txtValue4 = td4.textContent || td4.innerText;
      txtValue5 = td5.textContent || td5.innerText;
      if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 || txtValue4.toUpperCase().indexOf(filter) > -1 || txtValue5.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

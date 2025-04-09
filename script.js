function createTable() {
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    const numRows = parseInt(rn);
    const numCols = parseInt(cn);

    // Validate input
    if (isNaN(numRows) || isNaN(numCols)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (numRows <= 0 || numCols <= 0) {
        alert("Number of rows and columns must be greater than zero.");
        return;
    }

    const table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = "";

    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

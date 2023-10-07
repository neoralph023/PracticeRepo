const TableData = [
  {
    fname: "Juan",
    lname: "Dela Cruz",
    details: {
      hAddress: "block 5 lot 21 humanity Village, bagong silangang Quezon City",
      phoneNo: "43212345",
    },
  },
  {
    fname: "Ashley",
    lname: "Rush",
    details: {
      hAddress: "block 5 lot 21 humanity Village, bagong silangang Quezon City",
      phoneNo: "43212345",
    },
  },
];

let buttonFlag = false;

function loadTable() {
  const body = document.getElementById("tableDrawerBody");

  for (let i = 0; i < TableData.length; i++) {
    console.log(TableData[i]);
    // shown
    let row = `<tr>`;

    row += `<td><button class="btnSelect">*</button></td>`;
    row += `<td style="display: none">${i}</td>`;
    row += `<td>${TableData[i].fname}</td>`;
    row += `<td>${TableData[i].lname}</td>`;
    row += `</tr>`;
    row = $(row);

    $("#tableDrawer").append(row);

    row = `<tr id=${i} style="display: none">`;

    // details
    row += `<td colspan="3">
        <div style="background-color: grey">
            <fieldset>
            <legend>Details:</legend>
            <p>Home Address: ${TableData[i].details.hAddress}</p>
            <p>Phone Number: ${TableData[i].details.phoneNo}</p>
            </fieldset>
        </div>
    </td>`;
    row += `</tr>`;
    row = $(row);
    $("#tableDrawer").append(row);
  }
}

function btnClick() {
  console.log("na ");
}

document.addEventListener("DOMContentLoaded", () => {
  loadTable();

  $("#tableDrawer").on("click", ".btnSelect", function () {
    const id = $(this).closest("tr").find("td:eq(1)").text();
    $(`#${id}`).toggle();
  });
});

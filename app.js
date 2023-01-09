// HashMap for getting the names of known polygon shapes
const knownShapes = {
  3: "triangle",
  4: "quadrilateral",
  5: "pentagon",
  6: "hexagon",
  7: "heptagon",
  8: "octagon",
  9: "nonagon",
  10: "decagon",
  11: "hendecagon",
  12: "dodecagon",
};

// Default value for the number of vertices
let n = 3;

// Gets all the HTML DOM references
const minusBtn = document.getElementById("minus");
const addBtn = document.getElementById("add");
const displayAngles = document.getElementById("display-angles");
const polygon = document.getElementById("polygon");
const polygonName = document.getElementById("polygon-name");

// Handles the adding and subtracting of polygon angles
const addMoreAngle = (add = true) => {
  // Conditional statements that determines the adding and subtracting of vertices
  if (!add) {
    if (n > 3) n -= 1;
    // https://www.w3schools.com/js/js_errors.asp
    // Keeps away from running the whole code below in case that the input is invalid
    else throw "Cannot have less than 3 vertices for a polygon";
  } else n += 1;

  // Display the number of vertices, polygon shape name, and the sum measurement
  displayAngles.innerHTML = n;
  polygonName.innerHTML = `${knownShapes[n] ?? "Unkown Shape Name"} (${
    (n - 2) * 180
  })`;

  // https://stackoverflow.com/questions/3436453/calculate-coordinates-of-a-regular-polygons-vertices
  // Computes the new polygon shape coordinates
  let newPolygon = [];
  const angle = (2 * Math.PI) / n;
  for (i = 0; i < n; i++) {
    newPolygon.push(
      `${Math.round(250 + 200 * Math.cos(i * angle))},${Math.round(
        250 + 200 * Math.sin(i * angle)
      )}`
    );
  }

  // https://www.sololearn.com/discuss/1948656/how-to-change-polygon-s-points-using-javascript-s-dom
  // Set the new polygon coordinates to change the existing polygon shape
  polygon.setAttribute("points", newPolygon.join(" "));
};

// Binds the necessary functions if all HTML DOM Elements are present
if (minusBtn && addBtn && displayAngles && polygonName && polygon) {
  minusBtn.addEventListener("click", () => addMoreAngle(false));
  addBtn.addEventListener("click", addMoreAngle);

  // This will show the 1st polygon shape when running the html file
  addMoreAngle();
}

let pointObjectsArray = [
  { x: 0, y: 290 },
  { x: 10, y: 291 },
  { x: 20, y: 292 },
  { x: 30, y: 293 },
  { x: 40, y: 293.5 },
  { x: 50, y: 294 },
  { x: 60, y: 293.5 },
  { x: 70, y: 292 },
  { x: 80, y: 289 },
  { x: 90, y: 285 },
  { x: 100, y: 280 },
  { x: 110, y: 274 },
  { x: 120, y: 267 },
  { x: 130, y: 260, year: 2006 },
  { x: 140, y: 253 },
  { x: 150, y: 246 },
  { x: 160, y: 240 },
  { x: 170, y: 234 },
  { x: 180, y: 228 },
  { x: 190, y: 222 },
  { x: 200, y: 217 },
  { x: 210, y: 213 },
  { x: 220, y: 210 },
  { x: 230, y: 208 },
  { x: 240, y: 207 },
  { x: 250, y: 208 },
  { x: 260, y: 210, year: 2008 },
  { x: 270, y: 212 },
  { x: 280, y: 214 },
  { x: 290, y: 216 },
  { x: 300, y: 218 },
  { x: 310, y: 219 },
  { x: 320, y: 219.5 },
  { x: 330, y: 219 },
  { x: 340, y: 218 },
  { x: 350, y: 215 },
  { x: 360, y: 212 },
  { x: 370, y: 208 },
  { x: 380, y: 204 },
  { x: 390, y: 200 },
  { x: 400, y: 194, year: 2010 },
  { x: 410, y: 188 },
  { x: 420, y: 181 },
  { x: 430, y: 174 },
  { x: 440, y: 167 },
  { x: 450, y: 159 },
  { x: 460, y: 152 },
  { x: 470, y: 145 },
  { x: 480, y: 139, year: 2012 },
  { x: 490, y: 132 },
  { x: 500, y: 125 },
  { x: 510, y: 119 },
  { x: 520, y: 114 },
  { x: 530, y: 110 },
  { x: 540, y: 107 },
  { x: 550, y: 105 },
  { x: 560, y: 104 },
  { x: 570, y: 105 },
  { x: 580, y: 106, year: 2014 },
  { x: 590, y: 108 },
  { x: 600, y: 110 },
  { x: 610, y: 112 },
  { x: 620, y: 113 },
  { x: 630, y: 113.5 },
  { x: 640, y: 113 },
  { x: 650, y: 112 },
  { x: 660, y: 111 },
  { x: 670, y: 110, year: 2016 },
  { x: 680, y: 108 },
  { x: 690, y: 105 },
  { x: 700, y: 101 },
  { x: 710, y: 96 },
  { x: 720, y: 90 },
  { x: 730, y: 87 },
  { x: 740, y: 85 },
  { x: 750, y: 86 },
  { x: 760, y: 87, year: 2018 },
  { x: 770, y: 91 },
  { x: 780, y: 94 },
  { x: 790, y: 96 },
  { x: 800, y: 95.5 },
  { x: 810, y: 95 },
  { x: 820, y: 94.5 },
  { x: 830, y: 94 },
  { x: 840, y: 92 },
  { x: 850, y: 88 },
  { x: 860, y: 83 },
  { x: 870, y: 77 },
  { x: 880, y: 70 },
  { x: 890, y: 67 },
];
let mark = document.getElementsByClassName("ship-mark")[0];
let yearTextBlocks = document.getElementsByClassName(
  "container__elem elem_bottom"
);
let controlPoints = document.getElementsByClassName("point point_control");
let shipOrigin = findShipMarkOrigin();
let currentPos = shipOrigin;
let targetPos = shipOrigin;
let currentYear = 0;
let prevYear = 0; // this line is never used
let current_zIndex = 1;

function createPath() {
  let graphContainer = document.getElementsByClassName("elem-graph")[0];
  let year, x, y, index;

  for (let i = 0; i < pointObjectsArray.length; i++) {
    let pointObj = pointObjectsArray[i];
    let pointElem = document.createElement("div");

    for (let prop in pointObj) {
      if (pointObj.hasOwnProperty(prop)) {
        year = pointObj["year"];
        x = pointObj["x"];
        y = pointObj["y"];
        index = pointObj["index"];
      }
    }

    if (pointObj["year"]) {
      pointElem.classList.add("point_control");
      pointElem.setAttribute("data-year", year);
      pointElem.setAttribute("data-index", index);
    } else {
      pointElem.classList.add("point_regular");
    }
    pointElem.style.left = x + "px";
    pointElem.style.top = y + "px";
    pointElem.classList.add("point");
    graphContainer.appendChild(pointElem);
  }
}
createPath(pointObjectsArray);

function findShipMarkOrigin() {
  let newArr = [];
  for (let j = 0; j < pointObjectsArray.length; j++) {
    if (pointObjectsArray[j]["year"]) {
      pointObjectsArray[j]["index"] = j;
      newArr.push(pointObjectsArray[j]);
    }
  }
  let min = newArr[0]["year"];
  let idx = newArr[0]["index"];
  for (let k = 0; k < newArr.length; k++) {
    if (newArr[k]["year"] < min) {
      min = newArr[k]["year"];
      idx = newArr[k]["index"];
    }
  }
  return idx;
}

mark.style.left = pointObjectsArray[shipOrigin].x + "px";
mark.style.top = pointObjectsArray[shipOrigin].y + "px";

function addYearFlags(point) {
  let yearFlag = document.createElement("span");
  let text = point.getAttribute("data-year");

  yearFlag.classList.add("year-flag");
  yearFlag.textContent = text;
  point.appendChild(yearFlag);
  yearFlag.style.left = point.left + "px";
  yearFlag.style.top = point.top + "px";
}

function calcRotationDeg(targetX, currentX, targetY, currentY, direct) {
  let angleDeg;
  if (!(targetY || targetX)) {
    return false;
  } else {
    if (direct === 1) {
      angleDeg =
        (Math.atan2(targetY - currentY, targetX - currentX) * 180) / Math.PI;
    } else {
      angleDeg =
        (Math.atan2(currentY - targetY, currentX - targetX) * 180) / Math.PI;
    }
    return angleDeg.toFixed(0);
  }
}

function showYearTextBlock(index) {
  let thisYear = controlPoints[index].getAttribute("data-year");
  if (yearTextBlocks[index].getAttribute("data-year") === thisYear) {
    yearTextBlocks[index].classList.add("year_visible");
    yearTextBlocks[index].classList.remove("year_hidden");
    yearTextBlocks[index].style.zIndex = String(current_zIndex++);
  } else {
    return false;
  }
}

function moveShip(direct) {
  targetPos = targetPos + direct;

  let targetPointX = pointObjectsArray[targetPos].x;
  let targetPointY = pointObjectsArray[targetPos].y;
  let shipOriginX = pointObjectsArray[shipOrigin].x;
  let shipOriginY = pointObjectsArray[shipOrigin].y;
  let shipCurrentX = pointObjectsArray[currentPos].x;
  let shipCurrentY = pointObjectsArray[currentPos].y;
  let dist_y = targetPointY - shipOriginY;
  let dist_x = targetPointX - shipOriginX;
  let rotate = calcRotationDeg(
    targetPointX,
    shipCurrentX,
    targetPointY,
    shipCurrentY,
    direct
  );

  mark.style.oTransform =
    "translateX(" +
    dist_x +
    "px" +
    ")" +
    " translateY(" +
    dist_y +
    "px" +
    ")" +
    " rotate(" +
    rotate +
    "deg" +
    ")";
  mark.style.transform =
    "translateX(" +
    dist_x +
    "px" +
    ")" +
    " translateY(" +
    dist_y +
    "px" +
    ")" +
    " rotate(" +
    rotate +
    "deg" +
    ")";

  currentPos = currentPos + direct;
}

let controlPointsArray = Array.prototype.slice.call(controlPoints, 0);

controlPointsArray.forEach(function (point, index) {
  addYearFlags(point);

  point.onclick = function () {
    let year = Number(point.getAttribute("data-year"));
    let timer = setInterval(function () {
      if (year === pointObjectsArray[currentPos]["year"]) {
        currentYear = year;
        showYearTextBlock(index);
        clearInterval(timer);
        return;
      }
      moveShip(year > currentYear ? 1 : -1);
    }, 60);
  };
});

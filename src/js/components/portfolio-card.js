function byID(id) {
  return document.getElementById(id);
}
const portfolio = document.querySelector('.portfolio')
if(!portfolio) {
  // break byID(id);
} else {
  byID("toggle").onclick = function() {
    if (byID("container").classList.contains("closed")) {
      byID("container").classList.remove("closed");
    } else {
      byID("container").classList.add("closed");
    }
  }
  byID("toggleTwo").onclick = function() {
    if (byID("containerTwo").classList.contains("closedTwo")) {
      byID("containerTwo").classList.remove("closedTwo");
    } else {
      byID("containerTwo").classList.add("closedTwo");
    }
  }
  byID("toggleThree").onclick = function() {
    if (byID("containerThree").classList.contains("closedThree")) {
      byID("containerThree").classList.remove("closedThree");
    } else {
      byID("containerThree").classList.add("closedThree");
    }
  }
  byID("toggleFour").onclick = function() {
    if (byID("containerFour").classList.contains("closedFour")) {
      byID("containerFour").classList.remove("closedFour");
    } else {
      byID("containerFour").classList.add("closedFour");
    }
  }
  byID("toggleFive").onclick = function() {
    if (byID("containerFive").classList.contains("closedFive")) {
      byID("containerFive").classList.remove("closedFive");
    } else {
      byID("containerFive").classList.add("closedFive");
    }
  }
  byID("toggleSix").onclick = function() {
    if (byID("containerSix").classList.contains("closedSix")) {
      byID("containerSix").classList.remove("closedSix");
    } else {
      byID("containerSix").classList.add("closedSix");
    }
  }
  byID("toggleSeven").onclick = function() {
    if (byID("containerSeven").classList.contains("closedSeven")) {
      byID("containerSeven").classList.remove("closedSeven");
    } else {
      byID("containerSeven").classList.add("closedSeven");
    }
  }
}

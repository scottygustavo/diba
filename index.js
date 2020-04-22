
// -=-=-=-=-=-=-=- Age -=-=-=-=-=-=-=-
var age = document.getElementById("age");
var aggregateAge = aggregateDataNums(q2age);
var ageData = sortWithTwoVars(aggregateAge, getCounts(q2age, aggregateAge));
var ageColors = [];
var below65 = 0;
var above65 = 0;
for(var i = 0; i < aggregateAge.length; i++) {
  if(aggregateAge[i] < 65) {
    ageColors.push(colorGreen2);
    below65 += ageData[1][i];
  } else {
    ageColors.push(colorRed2);
    above65 += ageData[1][i];
  }
}
document.getElementById("below65").innerHTML = below65;
document.getElementById("above65").innerHTML = above65;

new Chart(age, {
  type: 'bar',
  data: {
    labels: ageData[0],
    datasets: [{
      label: 'Number of People',
      data: ageData[1],
      backgroundColor: ageColors,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Age of Residents',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
  }
});

// -=-=-=-=-=-=-=- People who stay in -=-=-=-=-=-=-=-
var stayIn = document.getElementById("stayIn");
// to separate by age and whether they go out
var stayInAgeData = [];
for(var i = 0; i < q3leftPast3.length; i++) {
  if(q2age[i] >= 65 && q3leftPast3[i] == "yes") {
    stayInAgeData.push("Yes (over 65)");
  } else if(q2age[i] < 65 && q3leftPast3[i] == "yes") {
    stayInAgeData.push("Yes (under 65)");
  } else if(q2age[i] >= 65 && q3leftPast3[i] == "no") {
    stayInAgeData.push("No (over 65)");
  } else if(q2age[i] < 65 && q3leftPast3[i] == "no") {
    stayInAgeData.push("No (under 65)");
  } else {
    stayInAgeData.push("N/A");
  }
}
var aggregateStayIn = aggregateData(stayInAgeData);
var stayInData = sortWithTwoVars(aggregateStayIn, getCounts(stayInAgeData, aggregateStayIn));

var stayInAgeColors = [];
for(var i = 0; i < aggregateStayIn.length; i++) {
  if(aggregateStayIn[i] == "Yes (over 65)") {
    stayInAgeColors.push(colorGreen);
  } else if(aggregateStayIn[i] == "Yes (under 65)") {
    stayInAgeColors.push(colorTurq);
  } else if(aggregateStayIn[i] == "No (over 65)") {
    stayInAgeColors.push(colorRed);
  } else if(aggregateStayIn[i] == "No (under 65)") {
    stayInAgeColors.push(colorOrange);
  } else {
    stayInAgeColors.push(colorDark);
  }
}
new Chart(stayIn, {
  type: 'doughnut',
  data: {
    labels: stayInData[0],
    datasets: [{
      data: stayInData[1],
      backgroundColor: stayInAgeColors,
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Have you left the house in past 3 days?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    responsive: true,
  }
});

// -=-=-=-=-=-=-=- People who left -=-=-=-=-=-=-=-

var reasonLeft = document.getElementById("reasonLeft");
var reasonLeftSplit = splitText(q4whyLeft);
var aggregateReasonLeft = aggregateData(reasonLeftSplit);
var reasonLeftData = sortWithTwoVars(getCounts(reasonLeftSplit, aggregateReasonLeft), aggregateReasonLeft);

new Chart(reasonLeft, {
  type: 'bar',
  data: {
    labels: reasonLeftData[1],
    datasets: [{
      label: 'Reason',
      data: reasonLeftData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Why did you leave the shelter?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Comorbs -=-=-=-=-=-=-=-

var comorb = document.getElementById("comorb");
var comorbSplit = splitText(q5comorbs);
var aggregateComorbs = aggregateData(comorbSplit);
var comorbsData = sortWithTwoVars(getCounts(comorbSplit, aggregateComorbs), aggregateComorbs);

new Chart(comorb, {
  type: 'doughnut',
  data: {
    labels: comorbsData[1],
    datasets: [{
      label: 'Reason',
      data: comorbsData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'What comorbidities do you have?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Perceived Severity -=-=-=-=-=-=-=-

var perSever = document.getElementById("perSever");
var aggregatePerSever = aggregateData(q6perSev);
var perSeverData = sortWithTwoVars(getCounts(q6perSev, aggregatePerSever), aggregatePerSever);

new Chart(perSever, {
  type: 'doughnut',
  data: {
    labels: perSeverData[1],
    datasets: [{
      label: 'Reason',
      data: perSeverData[0],
      backgroundColor: [colorTurq, colorGreen, colorYellow, colorRed],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'How serious would it be if you got COVID19 (perceived)?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Perceived Risk -=-=-=-=-=-=-=-

var perRisk = document.getElementById("perRisk");
var aggregatePerRisk = aggregateData(q7perRisk);
var perRiskData = sortWithTwoVars(getCounts(q7perRisk, aggregatePerRisk), aggregatePerRisk);

new Chart(perRisk, {
  type: 'doughnut',
  data: {
    labels: perRiskData[1],
    datasets: [{
      label: 'Reason',
      data: perRiskData[0],
      backgroundColor: [colorTurq, colorYellow, colorRed, colorBlue],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Are you at risk for COVID19 (perceived)?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

var eight = document.getElementById("eight");

// -=-=-=-=-=-=-=- Perceived Efficacy -=-=-=-=-=-=-=-

var perEfficacy = document.getElementById("perEfficacy");
var aggregatePerEff = aggregateData(q9perAvoid);
var perEffData = sortWithTwoVars(getCounts(q9perAvoid, aggregatePerEff), aggregatePerEff);

new Chart(perEfficacy, {
  type: 'doughnut',
  data: {
    labels: perEffData[1],
    datasets: [{
      label: 'Reason',
      data: perEffData[0],
      backgroundColor: [colorTurq, colorYellow, colorGreen, colorRed],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Staying inside for a week will avoid COVID19 (perceived)?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Ability to Stay In -=-=-=-=-=-=-=-

var stayInAbility = document.getElementById("stayInAbility");
var aggregateStayInAbility = aggregateData(q10stayWeek);
var stayInAbilityData = sortWithTwoVars(getCounts(q10stayWeek, aggregateStayInAbility), aggregateStayInAbility);

new Chart(stayInAbility, {
  type: 'doughnut',
  data: {
    labels: stayInAbilityData[1],
    datasets: [{
      label: 'Reason',
      data: stayInAbilityData[0],
      backgroundColor: [colorTurq, colorYellow, colorRed, colorGreen],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Can you stay in community center for 1 week?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- How easy to stay in -=-=-=-=-=-=-=-

var howEasyToStay = document.getElementById("howEasyToStay");
var aggregateHowEasyToStay = aggregateData(q11howEasyToStay);
var howEasyToStayData = sortWithTwoVars(getCounts(q11howEasyToStay, aggregateHowEasyToStay), aggregateHowEasyToStay);

new Chart(howEasyToStay, {
  type: 'doughnut',
  data: {
    labels: howEasyToStayData[1],
    datasets: [{
      label: 'Reason',
      data: howEasyToStayData[0],
      backgroundColor: [colorYellow, colorRed, colorGreen],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'How easy is it to stay in comm. center 1 week?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Make it easier to stay in -=-=-=-=-=-=-=-

var easierToStay = document.getElementById("easierToStay");
var easierToStaySplit = splitText(q12whatMakeStayEasier);
var aggregateEasierToStay = aggregateData(easierToStaySplit);
var easierToStayData = sortWithTwoVars(getCounts(easierToStaySplit, aggregateEasierToStay), aggregateEasierToStay);

new Chart(easierToStay, {
  type: 'bar',
  data: {
    labels: easierToStayData[1],
    datasets: [{
      label: 'Reason',
      data: easierToStayData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'What would make it easier to stay in?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- How difficult to stay in -=-=-=-=-=-=-=-

var howDifficultToStay = document.getElementById("howDifficultToStay");
var aggregateHowDifficultToStay = aggregateData(q13howDifficultToStay);
var howDifficultToStayData = sortWithTwoVars(getCounts(q13howDifficultToStay, aggregateHowDifficultToStay), aggregateHowDifficultToStay);

new Chart(howDifficultToStay, {
  type: 'doughnut',
  data: {
    labels: howDifficultToStayData[1],
    datasets: [{
      label: 'Reason',
      data: howDifficultToStayData[0],
      backgroundColor: [colorTurq, colorYellow, colorRed, colorGreen],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'How difficult would it be to stay in sr. center 1 week?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- What makes it difficult to stay in -=-=-=-=-=-=-=-

var difficultToStay = document.getElementById("difficultToStay");
var difficultToStaySplit = splitText(q14whatMakesDifficult);
var aggregateDifficultToStay = aggregateData(difficultToStaySplit);
var difficultToStayData = sortWithTwoVars(getCounts(difficultToStaySplit, aggregateDifficultToStay), aggregateDifficultToStay);

new Chart(difficultToStay, {
  type: 'bar',
  data: {
    labels: difficultToStayData[1],
    datasets: [{
      label: 'Reason',
      data: difficultToStayData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'What makes it difficult to stay in?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Advantages to Staying In -=-=-=-=-=-=-=-

var stayingAdvant = document.getElementById("stayingAdvant");
var stayingAdvantSplit = splitText(q15centerAdvants);
var aggregateStayingAdvant = aggregateData(stayingAdvantSplit);
var stayingAdvantData = sortWithTwoVars(getCounts(stayingAdvantSplit, aggregateStayingAdvant), aggregateStayingAdvant);

new Chart(stayingAdvant, {
  type: 'bar',
  data: {
    labels: stayingAdvantData[1],
    datasets: [{
      label: 'Reason',
      data: stayingAdvantData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'What are the advantages to staying in?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Disdvantages to Staying In -=-=-=-=-=-=-=-

var stayingDisadvant = document.getElementById("stayingDisadvant");
var stayingDisadvantSplit = splitText(q16centerDisadvants);
var aggregateStayingDisadvant = aggregateData(stayingDisadvantSplit);
var stayingDisadvantData = sortWithTwoVars(getCounts(stayingDisadvantSplit, aggregateStayingDisadvant), aggregateStayingDisadvant);

new Chart(stayingDisadvant, {
  type: 'bar',
  data: {
    labels: stayingDisadvantData[1],
    datasets: [{
      label: 'Reason',
      data: stayingDisadvantData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'What are the disadvantages to staying in?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- How difficult to stay in -=-=-=-=-=-=-=-

var stayImportance = document.getElementById("stayImportance");
var aggregateStayImportance = aggregateData(q17peopleKnowValueStay);
var stayImportanceData = sortWithTwoVars(getCounts(q17peopleKnowValueStay, aggregateStayImportance), aggregateStayImportance);

new Chart(stayImportance, {
  type: 'doughnut',
  data: {
    labels: stayImportanceData[1],
    datasets: [{
      label: 'Reason',
      data: stayImportanceData[0],
      backgroundColor: [colorYellow, colorOrange, colorRed, colorGreen],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Do people you know think its important to stay?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Who Approves of you staying -=-=-=-=-=-=-=-

var approveStay = document.getElementById("approveStay");
var approveStaySplit = splitText(q18whoApprove);
var aggregateApproveStay = aggregateData(approveStaySplit);
var approveStayData = sortWithTwoVars(getCounts(approveStaySplit, aggregateApproveStay), aggregateApproveStay);

new Chart(approveStay, {
  type: 'bar',
  data: {
    labels: approveStayData[1],
    datasets: [{
      label: 'Reason',
      data: approveStayData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who approves of you staying?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

// -=-=-=-=-=-=-=- Who Disapproves of you staying -=-=-=-=-=-=-=-

var disapproveStay = document.getElementById("disapproveStay");
var disapproveStayplit = splitText(q10whoDisapprove);
var aggregateDisapproveStay = aggregateData(disapproveStayplit);
var disapproveStayData = sortWithTwoVars(getCounts(disapproveStayplit, aggregateDisapproveStay), aggregateDisapproveStay);

new Chart(disapproveStay, {
  type: 'bar',
  data: {
    labels: disapproveStayData[1],
    datasets: [{
      label: 'Reason',
      data: disapproveStayData[0],
      backgroundColor: colorsArray,
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who disapproves of you staying?',
      fontSize: 20
    },
      elements: {
      arc: {
          borderWidth: 0
      }
    },
    scales : {
        yAxes : [{
            ticks : {
                beginAtZero : true
            }   
        }]
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});

aggregateDataNums([1, 2, 3, 4, 4, 4, 5])
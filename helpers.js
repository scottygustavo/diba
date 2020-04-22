function aggregateData(data) {
  var aggregatedData = [];
  for(var i = 0; i < data.length; i++) {
    var splitData = data[i].split(", ");
    for(var j = 0; j < splitData.length; j++) {
      aggregatedData.push(splitData[j]);
    }
  }
  var dataSet = new Set(aggregatedData);
  return Array.from(dataSet)
}

function aggregateDataNums(data) {
  var aggregatedData = [];
  for(var i = 0; i < data.length; i++) {
    aggregatedData.push(data[i]);
  }
  var dataSet = new Set(aggregatedData);
  return Array.from(dataSet)
}

function getCounts(original, aggregated) {
  var counts = [];
  for(var i = 0; i < aggregated.length; i++) {
    counts.push(original.filter(x => x === aggregated[i]).length)
  }
  return counts;
}

function sortWithTwoVars(var1, var2) {
  var tempList =[];
  for(var i = 0; i < var1.length; i++) {
    tempList.push({'var1': var1[i], 'var2': var2[i]});
  };

  tempList.sort((a, b) => (a.var1 > b.var1) ? 1 : -1);
  for(var i = 0; i < tempList.length; i++) {
    var1[i] = tempList[i].var1;
    var2[i] = tempList[i].var2;
  };
  return [var1, var2];
}

function splitText(text) {
  var finalList = [];
  for(var i = 0; i < text.length; i++) {
    
    tempArr = text[i].split(", ");
    
    for(var j = 0; j < tempArr.length; j++) {
      finalList.push(tempArr[j]);
    }
  }
  return finalList;
}
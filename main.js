var curIndex = 100;
var tickCount = 0;

function onLoad(input, output) {
  curIndex = 100;
  tickCount = 0;
}

function onExerciseStart(input, output) {}
function onExercisePause() {}
function onExerciseContinue() {}

function evaluate(input, output) {
  tickCount++;
  
  if (tickCount % 5 === 0) {
    curIndex += 6;
    if (curIndex > 450) {
      curIndex = 100;
    }
  }
  
  output.curBase = curIndex;
}

function getUserInterface(input, output) {
  return {
    template: 't'
  };
}

function getSummaryOutputs(input, output) {
  return [];
}

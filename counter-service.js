const fs = require('fs');

const addCounter = (increment) => {
  const data = fs.readFileSync("counter.json", "utf8");
  
  let newCounterValue;
  try {
    newCounterValue = parseInt(JSON.parse(data).counter)+increment;
  } catch(err) {
    console.log(err);
    return;
  }

  fs.writeFileSync("counter.json", JSON.stringify({counter:newCounterValue || 0}), 'utf8');
  return newCounterValue;
}

exports.addCounter = addCounter;

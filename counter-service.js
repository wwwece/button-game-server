// Using json as a "database" only for the sake of simplicity.

const fs = require('fs');

const addCounter = (increment) => {
  const newCounterValue = getCounter()+increment;
  fs.writeFileSync("counter.json", JSON.stringify({counter:newCounterValue || 0}), 'utf8');
  return newCounterValue;
}

const getCounter = () => {
  let counter;
  try {
    const data = fs.readFileSync("counter.json", "utf8");
    counter = parseInt(JSON.parse(data).counter);
  } catch(err) {
    if (err.code === 'ENOENT') {
      fs.writeFileSync("counter.json", JSON.stringify({counter: 0}), 'utf8');
      return 0;
    } else {
      console.log(err);
      return;
    }
  }
  return counter;
}

exports.addCounter = addCounter;
exports.getCounter = getCounter;

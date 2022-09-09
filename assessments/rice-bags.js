function maxSetSize(riceBags) {
  const length = riceBags.length;

  let perfect = [];
  for (let i = 0; i < length; i++) {
    perfect[i] = [riceBags[i]];

    for (let j = 0; j < length; j++) {
      if (j === i) continue;
      const minimum = Math.min(...perfect[i]);
      const maximum = Math.max(...perfect[i]);

      const isPerfectMax = Math.pow(maximum, 2) === riceBags[j];
      const isPerfectMin = Math.pow(riceBags[j], 2) === minimum;

      if (isPerfectMin) {
        perfect[i].push(riceBags[j]);
      }

      if (isPerfectMax) {
        perfect[i].unshift(riceBags[j]);
      }
    }
  }

  return Math.max(...perfect.map(arr => arr.length));
}

console.log(maxSetSize([625, 16, 4, 3, 2, 9, 256, 5, 25]));

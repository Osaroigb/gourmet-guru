const sockMerchant = (_n, ar) => {
  const sockCountMap = {};

  // Count the occurrences of each color
  for (const color of ar) {
    sockCountMap[color] = (sockCountMap[color] || 0) + 1;
  }

  // Count pairs based on the occurrences
  let pairCount = 0;

  for (const count of Object.values(sockCountMap)) {
    // Calculate pairs for each color
    pairCount += Math.floor(count / 2);
  }

  return pairCount;
};

// Example usage
const result = sockMerchant(10, [10, 20, 20, 10, 10, 30, 50, 10, 20, 30]);
console.info(result);

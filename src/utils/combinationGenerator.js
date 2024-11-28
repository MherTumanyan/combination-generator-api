function generateCombinations(items, length) {
  const results = [];

  function backtrack(path, start) {
    if (path.length === length) {
      results.push([...path]);
      return;
    }
    for (let i = start; i < items.length; i++) {
      const prefix = items[i].charAt(0);
      if (path.some(p => p.charAt(0) === prefix)) continue;
      path.push(items[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }

  backtrack([], 0);
  return results;
}

module.exports = generateCombinations;

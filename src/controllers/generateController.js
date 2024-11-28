const { insertItemsAndCombinationsAndResponse } = require('../db/queries');
const generateCombinations = require('../utils/combinationGenerator');

exports.generate = async (req, res) => {
  const { items, length } = req.body;

  try {
    // Validate input
    if (!Array.isArray(items) || typeof length !== 'number' || length <= 0) {
      return res.status(400).json({ error: 'Invalid input. Provide an array of items and a valid length.' });
    }

    // Transform input into formatted items like A1, B1, etc.
    const transformedItems = transformItems(items);
    
    // Generate combinations based on transformed items
    const combinations = generateCombinations(transformedItems, length);

    // Insert items, combinations, and response in a single transaction
    await insertItemsAndCombinationsAndResponse(transformedItems, combinations);

    // Return response
    res.status(201).json({
      id: Date.now(),
      combination: combinations,
    });
  } catch (err) {
    console.error('Error generating combinations:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

function transformItems(input) {
  const result = [];
  input.forEach((count, index) => {
    const prefix = String.fromCharCode(65 + index); // A, B, C, ...
    for (let i = 1; i <= count; i++) {
      result.push(`${prefix}${i}`);
    }
  });
  return result;
}

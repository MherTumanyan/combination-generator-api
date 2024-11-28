const pool = require('./connection');

async function insertAllInDatabase(items, combinations) {
  const connection = await pool.getConnection();

  try {
    // Start the transaction
    await connection.beginTransaction();

    // Insert items into the database
    for (const item of items) {
      await connection.execute('INSERT INTO items (name) VALUES (?)', [item]);
    }

    // Insert combinations into the database
    for (const combination of combinations) {
      await connection.execute('INSERT INTO combinations (combination) VALUES (?)', [JSON.stringify(combination)]);
    }

    // Insert response into the database
    await connection.execute('INSERT INTO responses (response) VALUES (?)', [JSON.stringify({ combinations })]);

    // Commit the transaction
    await connection.commit();
  } catch (error) {
    // If there's an error, rollback the transaction
    await connection.rollback();
    throw error;
  } finally {
    // Always release the connection back to the pool
    connection.release();
  }
}

module.exports = {
  insertAllInDatabase,
};

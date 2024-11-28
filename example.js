function transformArray(input) {
    const result = [];
  
    input.forEach((value, index) => {
      const prefix = String.fromCharCode(65 + index); // 65 = ASCII for 'A'
      
      for (let count = 1; count <= value; count++) {
        result.push(`${prefix}${count}`);
      }
    });
  
    return result;
  }
  
  // Example usage:
  const input = [1, 2, 1, 4];
  const output = transformArray(input);
  console.log(output); // ["A1", "B1", "B2", "C1", "D1", "D2", "D3", "D4"]
  
function fusion(...objs) {
  const result = {};

  objs.forEach(obj => {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
          const key = keys[i];

          if (result.hasOwnProperty(key)) {
              if (Array.isArray(result[key]) && Array.isArray(obj[key])) {
                  result[key] = result[key].concat(obj[key]);
              } else if (typeof result[key] === 'string' && typeof obj[key] === 'string') {
                  result[key] = result[key] + " " + obj[key]; 
              } else if (typeof result[key] === 'number' && typeof obj[key] === 'number') {
                  result[key] = result[key] + obj[key]; 
              } else if (typeof result[key] === 'object' && typeof obj[key] === 'object' && !Array.isArray(result[key]) && !Array.isArray(obj[key])) {
                  result[key] = fusion(result[key], obj[key]); 
              } else {
                  result[key] = obj[key];
              }
          } else {
              result[key] = obj[key];
          }
      }
  });

  return result;
}

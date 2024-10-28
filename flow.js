function flow(funcs) {
    return function (...args) { 
      let accumulator = funcs[0](...args);
      for (let i = 1; i < funcs.length; i++) {
        accumulator = funcs[i](accumulator); 
      }
      return accumulator;
    };
  }
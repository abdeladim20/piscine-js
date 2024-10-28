function filterEntries(obj, predicate) {
    return Object.fromEntries(
      Object.entries(obj).filter(entry => predicate(entry))
    );
  }
  
  function mapEntries(obj, mapped) {
    return Object.fromEntries(
      Object.entries(obj).map(entry => mapped(entry))
    );
  }
  
  function reduceEntries(obj, reducer, initialValue) {
    if (initialValue === undefined) {
      return Object.entries(obj).reduce((acc, entry) => reducer(acc, entry));
    }
    return Object.entries(obj).reduce((acc, entry) => reducer(acc, entry), initialValue);
  }
  
  const cartTotal = (cart) => {
    return mapEntries(cart, ([key, value]) => [
      key, 
      mapEntries(nutritionDB[key], ([nutrientKey, nutrientValue]) => [
        nutrientKey, 
        parseFloat((nutrientValue * value / 100).toFixed(3))
      ])
    ]);
}

  
const lowCarbs = (cart) => {
    return filterEntries(cart, ([key, value]) => 
      (nutritionDB[key].carbs * value / 100) < 50
    );
  }

  const totalCalories = (cart) => {
    return Number(reduceEntries(cart, ((accumulator, [key, value]) => 
      accumulator + (nutritionDB[key].calories * value) / 100
    ), 0).toFixed(1));
  }
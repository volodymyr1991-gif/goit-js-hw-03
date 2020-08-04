const findBestEmployee = function (employees) {
    // твій код
    const values =Object.keys(employees);
  
    let total = {[values[0]]:employees[values[0]]};
    // for (let i = 0; i < values.length; i += 1) {
      for(const value of values)       {
      // console.log(value)
      if (employees[value]  > Object.values(total)[0]) {
        total = {[value]:employees[value]};
      }
    }
    //  const total = Math.max(...values); // 12
    return Object.keys(total)[0] ;
  };

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    })
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    })
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    })
  ); // lux
// const findBestEmployee = function (employees) {
//     // твій код
//     const values =Object.keys(employees);
  
//     let total = {[values[0]]:employees[values[0]]};
//     // for (let i = 0; i < values.length; i += 1) {
//       for(const value of values)       {
//       // console.log(value)
//       if (employees[value]  > Object.values(total)[0]) {
//         total = {[value]:employees[value]};
//       }
//     }
//     //  const total = Math.max(...values); // 12
//     return Object.keys(total)[0] ;
//   };

  // console.log(
  //   findBestEmployee({
  //     ann: 29,
  //     david: 35,
  //     helen: 1,
  //     lorence: 99,
  //   })
  // ); // lorence
  
  // console.log(
  //   findBestEmployee({
  //     poly: 12,
  //     mango: 17,
  //     ajax: 4,
  //   })
  // ); // mango
  
  // console.log(
  //   findBestEmployee({
  //     lux: 147,
  //     david: 21,
  //     kiwi: 19,
  //     chelsy: 38,
  //   })
  // ); // lux



  // const account = {
  //   owner: 'Mango',
  //   balance: 24000,
  //   discount: 0.1,
  //   orders: ['order-1', 'order-2', 'order-3'],
  //   changeDiscount(value) {
  //     this.discount = value;
  //   },
  //   showOrders() {
  //     return this.orders;
  //   },
  //   addOrder(cost, order) {
  //     this.balance -= cost;
  //     this.orders.push(order);
  //   },
  // };
  
  // account.changeDiscount(0.15);
  // console.log(account.discount); // 0.15
  
  // console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
  
  // account.addOrder(5000, 'order-4');
  // console.log(account.balance); // 19000
  // console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']



  const inventory = {
    items: ['Knife', 'Gas mask'],
     add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
  
        this.items.push(itemName);
      
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      this.items = this.items.filter(item => item !== itemName);
      
    },
  };
  
  const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    // return (action)

  };
  
  invokeInventoryAction('Medkit', inventory.add('Medkit'));
  // Invoking action on Medkit
  // Adding Medkit to inventory
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction('Gas mask', inventory.remove('Gas mask'));
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']
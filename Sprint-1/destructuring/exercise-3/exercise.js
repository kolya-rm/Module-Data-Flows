let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(list) {
  console.log("```");
  console.log("QTY".padEnd(8, " ") + "ITEM".padEnd(20, " ") + "TOTAL")
  const total = list.reduce((accumulator, {itemName, quantity, unitPricePence}) => {
    const sum = quantity * unitPricePence;
    const result = accumulator + sum;
    console.log(quantity.toString().padEnd(8, " ") + itemName.padEnd(20, " ") + sum);
    return result;
  }, 0);
  console.log(`\nTotal:  ${total}`);
  console.log("```");
}

printReceipt(order);
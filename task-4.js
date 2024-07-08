function getShippingCost(country) {
  let price = "";
  switch (country) {
    case "China":
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
    case "Chile":
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
    case "Australia":
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
    case "Jamaica":
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));

//Tried with 'break' but it is unreachable after 'return'.
// I am not too pleased with this code - it does not seem to bring much automation to the task.

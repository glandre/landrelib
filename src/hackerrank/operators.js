// @flow

// Day 2: Operators
const round = (number) => {
  const integer = parseInt(number)
  return (number - integer > 0.5) ? integer + 1 : integer
}
const totalCost = (mealCost, tipPercent, taxPercent) => {
  const tip = mealCost * tipPercent / 100
  const tax = mealCost * taxPercent / 100
  const totalCost = mealCost + tip + tax
  return round(totalCost)
}
const totalCostDescription = (totalCost) =>
  `The total meal cost is ${totalCost} dollars.`

export {
  round,
  totalCost,
  totalCostDescription
}

const mynu=[1,2,3,5]

// const myTotal=mynu.reduce( function (acc, currentVal) {
//     console.log(`acc: ${acc} and current value: ${ currentVal}`);
//     return acc + currentVal},0)
const myTotal=mynu.reduce( (acc,currentVal) => acc+currentVal,0 )

console.log(myTotal);

const shoppingCard= [
    {
        itemNme: "js",
        price: 423
    },
    {
        itemNme: "python",
        price: 550
    },
    {
        itemNme: "mobile dev",
        price: 5999
    },
    {
        itemNme: "Data science",
        price: 12999
    }
]

const totalBill=shoppingCard.reduce( (acc,item) => acc+item.price, 0)

console.log(totalBill);

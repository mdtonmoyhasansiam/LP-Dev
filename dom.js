console.log("Hello JavaScript");

var name = 'Rahim'
name = 'Jasim' // Reassign করা যায়
var name = 'Kuddus' // Redeclare করা যায়
console.log(name);

const roll = 20
// roll = 35 // Reassign করা যায় না
// const roll = 20 // Redeclare করা যায় না
console.log(roll);

let address = 'Uttara, Dhaka'
address = 'Banani, Dhaka' // Reassign সম্ভব
// let address = 'Gulshan, Dhaka' // Redeclare করা যাবে না
console.log(address);

let location = ['Dhaka', 'Banani']
location.push = 'Gulshan' // Redeclare করা না গেলেও, ভ্যালু পুশ করা সম্ভব।
console.log(location);

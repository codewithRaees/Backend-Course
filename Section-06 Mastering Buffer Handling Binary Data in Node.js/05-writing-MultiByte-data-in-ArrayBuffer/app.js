const b = new ArrayBuffer(20);
const view = new DataView(b);

// view.setInt16(0, 260);
// view.setInt16(2, 260, true);
// console.log(view.getUint16(0));
// console.log(view.getUint16(2, true));

// view.setInt16(0, 0x7823e324);
view.setBigInt64(0, 0x7823e3247823e324);

console.log(b);
console.log(view.getInt32(0));

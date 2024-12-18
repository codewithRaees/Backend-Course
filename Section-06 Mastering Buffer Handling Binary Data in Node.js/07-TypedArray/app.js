const a = new ArrayBuffer(4, { maxByteLength: 16 });
const uint8Array = new Uint8Array(a);

uint8Array[0] = 0xfe;
uint8Array[1] = 0xee;

// console.log(uint8Array);

const b = a.transfer();

console.log(b);
console.log(a);

// const uint8Array = new Uint8Array(a);
// console.log(uint8Array.buffer === a);

// const uint8Array = new Uint8Array(1.9 * 1024 * 1024 * 1024);

// console.log(uint8Array.buffer);

// setInterval(() => {
//   [
//     new Uint8Array(1.9 * 1024 * 1024 * 1024),
//     new Uint8Array(1.9 * 1024 * 1024 * 1024),
//   ];
// }, 1000);
// console.log(a);

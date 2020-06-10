const a = [1,2,3]

for (const cell of a) {
  console.log(cell);
  if (cell === 1) {
    console.log('ok')
    continue;
  }
  console.log('bbbbbb')
}
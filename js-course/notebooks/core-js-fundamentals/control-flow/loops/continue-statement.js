let i = 0;
while (i < 5) {
  i++;
  if (i === 2) continue; // Skip iteration when i is 2.
  console.log(i); // 1 3 4 5
}

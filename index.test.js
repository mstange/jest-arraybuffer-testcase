test('ArrayBuffer test', () => {
  const array = new Uint8Array(8);
  expect(array.buffer instanceof ArrayBuffer).toBe(true);
});

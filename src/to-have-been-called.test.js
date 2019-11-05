const myObj = {
  doSomething() {
    console.log('does something');
  }
};

test('stub .toHaveBeenCalled()', () => {
  const stub = jest.fn();
  stub();
  expect(stub).toHaveBeenCalled();
});
test('spyOn .toHaveBeenCalled()', () => {
  const somethingSpy = jest.spyOn(myObj, 'doSomething');
  myObj.doSomething();
  expect(somethingSpy).toHaveBeenCalled();
});

const myObj = {
  doSomething() {
    console.log('does something');
  }
};
const stub = jest.fn();

test('stub .toBeCalled()', () => {
  stub();
  expect(stub).toBeCalled();
});
test('spyOn .toBeCalled()', () => {
  const somethingSpy = jest.spyOn(myObj, 'doSomething');
  myObj.doSomething();
  expect(somethingSpy).toBeCalled();
});

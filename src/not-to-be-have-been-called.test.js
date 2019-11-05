const myObj = {
  doSomething() {
    console.log('does something');
  }
};

test('jest.fn().not.toBeCalled()/toHaveBeenCalled()', () => {
  const stub = jest.fn();
  expect(stub).not.toBeCalled();
  expect(stub).not.toHaveBeenCalled();
});
test('jest.spyOn().not.toBeCalled()/toHaveBeenCalled()', () => {
  const somethingSpy = jest.spyOn(myObj, 'doSomething').mockReturnValue();
  expect(somethingSpy).not.toBeCalled();
  expect(somethingSpy).not.toHaveBeenCalled();
});

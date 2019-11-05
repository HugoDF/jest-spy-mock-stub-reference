const myObj = {
  doSomething() {
    console.log('does something');
  }
};

test('spyOn().mockImplementation()', () => {
  const somethingSpy = jest.spyOn(myObj, 'doSomething').mockImplementation();
  myObj.doSomething();
  expect(somethingSpy).toHaveBeenCalled();
});
test('spyOn().mockReturnValue()', () => {
  const somethingSpy = jest.spyOn(myObj, 'doSomething').mockReturnValue();
  myObj.doSomething();
  expect(somethingSpy).toHaveBeenCalled();
});

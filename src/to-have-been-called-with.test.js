let state = 0;
const counter = {
  add(value) {
    state += value;
  },
  getCount() {
    return state;
  }
};

const singleAdd = (counter) => {
  counter.add(10);
};

test('singleAdd > jest.fn() toHaveBeenCalledWith() single call', () => {
  const mockCounter = {
    add: jest.fn()
  };
  singleAdd(mockCounter);
  expect(mockCounter.add).toHaveBeenCalledWith(10);
});

test('singleAdd > jest.spyOn() toHaveBeenCalledWith() single call', () => {
  const addSpy = jest.spyOn(counter, 'add');
  singleAdd(counter);
  expect(addSpy).toHaveBeenCalledWith(10);
});

const multipleAdd = (counter) => {
  counter.add(15);
  counter.add(20);
};

test('multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls', () => {
  const mockCounter = {
    add: jest.fn()
  };
  multipleAdd(mockCounter);
  expect(mockCounter.add).toHaveBeenCalledWith(15);
  expect(mockCounter.add).toHaveBeenCalledWith(20);
});
test('multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls', () => {
  const addSpy = jest.spyOn(counter, 'add');
  multipleAdd(counter);
  expect(addSpy).toHaveBeenCalledWith(15);
  expect(addSpy).toHaveBeenCalledWith(20);
});

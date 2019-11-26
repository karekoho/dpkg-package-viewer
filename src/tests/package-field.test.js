const { getField, getFieldValue } = require('../common/package-field')

test ('getField: array equal', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const line = getField(list);
  expect(line).toEqual([ 'Package', ' libws-commons-util-java' ]);
});
  
test ('getFieldValue: string equal', () => {
  const name = getFieldValue([ 'Package', ' libws-commons-util-java' ]);
  expect(name).toBe('libws-commons-util-java');
});
  
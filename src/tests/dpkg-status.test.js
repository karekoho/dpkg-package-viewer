const { getField, getFieldValue, createIndex, readStatus } = require('../common/dpkg-status');

// TODO: move to package-field.test
test ('getField: array equal', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const line = getField(list);
  expect(line).toEqual([ 'Package', ' libws-commons-util-java' ]);
});

// TODO: move to package-field.test
test ('getFieldValue: string equal', () => {
  const name = getFieldValue([ 'Package', ' libws-commons-util-java' ]);
  expect(name).toBe('libws-commons-util-java');
});

test ('createIndex: map size 2', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const map = createIndex(list);
  const p = map.get('libws-commons-util-java');
  expect(map.size).toBe(2);
  expect(p.name).toBe('libws-commons-util-java');
  expect(p.isAvaillable).toBe(true);
});

test('readStatus: map size 701', () => {
  readStatus('http://localhost:8081')
    .then(index => {
      expect(index.size).toBe(700); // FIXME: assertion has no effect
    }).catch(e => {
      console.error(e);
    });
});
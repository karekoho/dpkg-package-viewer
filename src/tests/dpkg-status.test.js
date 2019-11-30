const { createIndex, readStatus } = require('../common/dpkg-status');

test ('createIndex: map size 2', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const map = createIndex(list);
  const pkg = map.get('libws-commons-util-java');
  expect(map.size).toBe(2);
  expect(pkg.name).toBe('libws-commons-util-java');
  expect(pkg.isAvailable).toBe(true);
});

test('readStatus: map size 701', () => {
  readStatus('http://localhost:5000')
    .then(index => {
      expect(index.size).toBe(411)
    }).catch(e => {
      console.error(e);
    });
});
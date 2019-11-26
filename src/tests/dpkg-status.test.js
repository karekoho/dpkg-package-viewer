const { createIndex, readStatus } = require('../common/dpkg-status');

test ('createIndex: map size 2', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const map = createIndex(list);
  const p = map.get('libws-commons-util-java');
  expect(map.size).toBe(2);
  expect(p.name).toBe('libws-commons-util-java');
  expect(p.isAvailable).toBe(true);
});

test('readStatus: map size 701', () => {
  readStatus('http://localhost:8081')
    .then(index => {
      expect(index.size).toBe(411)
    }).catch(e => {
      console.error(e);
    });
});
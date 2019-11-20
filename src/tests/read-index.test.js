const { getLine, getInfo, doNameMap, readIndex } = require('../common/read-index');

test ('getLine: array equal', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const line = getLine(list);
  expect(line).toEqual([ 'Package', ' libws-commons-util-java' ]);
  //console.log(line);
});

test ('getInfo: string equal', () => {
  const name = getInfo([ 'Package', ' libws-commons-util-java' ]);
  expect(name).toBe('libws-commons-util-java');
  //console.log(name);
});

test ('doNameMap: map size 2', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const map = doNameMap(list);
  expect(map.size).toBe(2);
  expect(map.get('libws-commons-util-java')).toBe('Package: libws-commons-util-java\nStatus: install ok installed');
  // console.log(map.size);
});

test('readIndex: map size 701', () => {
  readIndex('http://localhost:8081')
    .then(index => {
      expect(index.size).toBe(701);
      // console.log(index.size);
    }).catch(e => {
      console.error(e);
    });
});
const { getField, getFieldValue, stripVersion, readDependencies } = require('../common/package-field')

test ('getField: array equal', () => {
  const list = 'Package: libws-commons-util-java\nStatus: install ok installed\n\nPackage: python-pkg-resources\nStatus: install ok installed\n';
  const line = getField(list);
  expect(line).toEqual([ 'Package', ' libws-commons-util-java' ]);
});
  
test ('getFieldValue: string equal', () => {
  const name = getFieldValue([ 'Package', ' libws-commons-util-java' ]);
  expect(name).toBe('libws-commons-util-java');
});

test ('stripVersion: string equal', () => {
  [ 
    { input: 'fonts-dejavu-core', expected: 'fonts-dejavu-core' },
    { input: 'debconf (>= 0.5)', expected: 'debconf' }

  ].forEach(assert => {
      const name = stripVersion(assert.input)
      expect(name).toBe(assert.expected)
  })
});

test ('readDependencies: array equal', () => {
  [
    { input: ' debconf (>= 0.5) | debconf-2.0, ucf (>= 0.29), fonts-dejavu-core | ttf-bitstream-vera | fonts-liberation | fonts-freefont', 
      expected: [['debconf', 'debconf-2.0'], ['ucf'], ['fonts-dejavu-core', 'ttf-bitstream-vera', 'fonts-liberation', 'fonts-freefont']] }

  ].forEach(assert => {
    const list = readDependencies(assert.input)
    expect(list).toEqual(assert.expected)
  })
});
  
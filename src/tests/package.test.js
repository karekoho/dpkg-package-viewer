const { Package } = require('../common/package');

test ('Package: dependency and reverse dependency', () => {
  [
    {
      name: 'a',
      src: "Depends: b, c, d\n",
      expected: {
        deps: ['b', 'c', 'd'],
        rdeps: []
      }
    },
    { 
      name: 'b',
      src: "Depends: c, d, e\n",
      expected: {
        deps: ['c', 'd', 'e'],
        rdeps: ['a']
      }
    },
    { 
      name: 'e',
      src: "Depends: a, c\n",
      expected: {
        deps: ['a', 'c'],
        rdeps: ['b']
      }
    },
    {
      name: 'a',
      // src: "Depends: b, c, d\n", // Not needed anymore.
      expected: {
        deps: ['b', 'c', 'd'],
        rdeps: ['e']
      }
    },
    {
      name: 'd',
      // src: "Depends:\n", // No deps. Empty field is parsed to [ '' ] and 'Package name not given' thrown
      expected: {
        deps: [],
        rdeps: ['a', 'b']
      }
    }

  ].forEach(assert => {
      const pkg = new Package (assert.name, assert.src);
      expect(pkg.depends).toEqual(assert.expected.deps);
      expect(pkg.reverseDepends).toEqual(assert.expected.rdeps);
    });

  expect(Package.instance.size).toBe(5);
});
const sayHi = require('./index.js')

test("Says 'Hello there Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello there Mike')
})
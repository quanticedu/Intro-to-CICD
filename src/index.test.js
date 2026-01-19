const sayHi = require('./index.js')

test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike, the x value is 42')
})

describe("Teste da calculadora", () => {
    test('testar a soma de 2 numeros', () => {
        expect(1 + 2).toBe(3)
    })
    it('deve multiplicar 2 numeros', () =>  {
        expect(1 * 4).toBe(4)
    })
    test.todo('testar divisao')
    console.log();
})
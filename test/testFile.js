const sumar = require("../index");
const assert =require("assert");
//asserts-> frase logica q ayuda a describir un caso de prueba afirmación
describe("probar la suma de dos números",()=>{
    //afirmar que 5+7=12
    it("cinco mas siete son 12",()=>{
        assert.equal(12, sumar(5,7));
    });
    //afirmar que 5+7!=57
    it("cinco mas siete no son 57",()=>{
        assert.notEqual(57,sumar(5,7));
    });
});



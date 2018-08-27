import { incrementar } from "./numeros";

describe("Pruebas de numeros", () => {
    it("Debe de retornar 100 si el nro es > 100", () => {
        let resp = incrementar(300);
        expect(resp).toBe(100);
    })
    it("Debe de retornar el (nro + 1) si el nro es < 100", () => {
        let resp = incrementar(50);
        expect(resp).toBe(51);
    })
})
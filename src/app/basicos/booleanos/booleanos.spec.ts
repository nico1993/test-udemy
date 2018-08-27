import { esUsuario } from "./booleanos";

describe("Pruebas de booleanos", () => {
    it("Debe retornar true", () => {
        let resp = esUsuario();
        expect(resp).toBeTruthy();
    })
});
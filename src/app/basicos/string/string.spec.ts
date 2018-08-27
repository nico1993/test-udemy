import { mensaje } from "./string";

describe("Pruebas de String", () => {
    it("Debe regresar un string", () => {
        let resp = mensaje("Fernando");
        expect(typeof resp).toBe("string");
    });
    it("Debe retornar un saludo con el nombre enviado", () => {
        let nombre = "Juan";
        let resp = mensaje(nombre); 
        expect(resp).toContain(nombre);
    });
});

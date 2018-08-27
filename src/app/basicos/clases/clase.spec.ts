import { Jugador } from "./clase";

describe("Pruebas de clases", () =>{
    let jugador = new Jugador();
    beforeAll(() => {
    });
    beforeEach(() => {
        jugador = new Jugador();
    });
    afterAll(() => {
    });
    afterEach(() => {
    });
    it("Debe de retornar 80 de hp, si recibe 20 de daño", () => {
        let resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });
    it("Debe de retornar 50 de hp, si recibe 50 de daño", () => {
        let resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });
    it("Debe de retornar 0 de hp, si recibe 100 o más de daño", () => {
        let resp = jugador.recibeDanio(1000);
        expect(resp).toBe(0);
    });
});
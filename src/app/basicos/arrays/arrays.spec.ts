import { obtenerAvengers } from "./arrays";

describe("Prueba de arrays", () => {
    it("Debe retornar al menos 3 avengers", () => {
        let resp = obtenerAvengers();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });
    it("Debe existir Ironman y Thor", () => {
        let resp = obtenerAvengers();
        expect(resp).toContain('Ironman');
        expect(resp).toContain('Thor');
    });
});
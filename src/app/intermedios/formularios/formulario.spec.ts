import { FormularioLogin } from "./formulario";
import { FormBuilder } from '@angular/forms';

describe("Formularios", () => {
    let componente: FormularioLogin;
    beforeEach(() => {
        componente = new FormularioLogin(new FormBuilder());
    })

    it("Debe crear un formulario con dos campos", () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it("Email debe ser requerido", () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
    it("Email debe ser correo valido", () => {
        const control = componente.form.get('email');
        control.setValue('nicolas@gmail.com');
        expect(control.valid).toBeTruthy();
    });
});
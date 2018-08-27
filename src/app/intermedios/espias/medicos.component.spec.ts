import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Http } from '@angular/http';
import { from, empty, Observable, throwError } from 'rxjs/index';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: Debe cargar los medicos', () => {
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            let medicos = [
                ['Medico1'],
                ['Medico2'],
                ['Medico3'],
            ];
            return from(medicos);
        });
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it("Debe llamar al servidor para agregar un medico", () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return empty();
        });
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it("Debe agregar un nuevo medico al array de medicos", () => {
        const medico = {id: 1, nombre: 'Juan'};
        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it("Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio", () => {
        let miError = "No se pudo agregar el medico";
        spyOn(servicio, 'agregarMedico').and.returnValue(
            throwError(miError)
        );
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });

    it("Debe llamar al servidor para borrar un medico", () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
            empty()
        );
        componente.borrarMedico("1");
        expect(espia).toHaveBeenCalledWith("1");
    });

    it("No debe llamar al servidor para borrar un medico", () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
            empty()
        );
        componente.borrarMedico("1");
        expect(espia).not.toHaveBeenCalledWith("1");
    });
});

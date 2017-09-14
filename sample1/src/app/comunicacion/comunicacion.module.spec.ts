import { ComunicacionModule } from './comunicacion.module';

describe('ComunicacionModule', () => {
  let comunicacionModule: ComunicacionModule;

  beforeEach(() => {
    comunicacionModule = new ComunicacionModule();
  });

  it('should create an instance', () => {
    expect(comunicacionModule).toBeTruthy();
  });
});

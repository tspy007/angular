import { ListacompraModule } from './listacompra.module';

describe('ListacompraModule', () => {
  let listacompraModule: ListacompraModule;

  beforeEach(() => {
    listacompraModule = new ListacompraModule();
  });

  it('should create an instance', () => {
    expect(listacompraModule).toBeTruthy();
  });
});

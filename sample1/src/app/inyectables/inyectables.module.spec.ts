import { InyectablesModule } from './inyectables.module';

describe('InyectablesModule', () => {
  let inyectablesModule: InyectablesModule;

  beforeEach(() => {
    inyectablesModule = new InyectablesModule();
  });

  it('should create an instance', () => {
    expect(inyectablesModule).toBeTruthy();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BicicletaService } from './bicicleta-service';

describe('BicicletaService', () => {
  let provider: BicicletaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BicicletaService],
    }).compile();

    provider = module.get<BicicletaService>(BicicletaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

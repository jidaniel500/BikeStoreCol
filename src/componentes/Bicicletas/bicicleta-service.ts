import { Injectable } from '@nestjs/common';
import { Bicicleta } from './bicicleta';

@Injectable()
export class BicicletaService {
   
   private Bicicletas : Bicicleta[] = [
      new Bicicleta("trek segafredo", CategoriasBicicletas.MONTAÑA)
   ]
   getModeloBicicletas(){
       
   }
}

enum CategoriasBicicletas {
     MONTAÑA, RUTA, CROSSCOUNTRY
}

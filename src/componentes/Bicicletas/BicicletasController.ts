
import { Get, Post, Body, Controller } from '@nestjs/common'

@Controller('Bicicletas')
export class BicicletaController {

    @Get()
    async findByModelo(modelo: string) {
         
    }
}
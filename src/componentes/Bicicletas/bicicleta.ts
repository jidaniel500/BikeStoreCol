export class Bicicleta {
    
    private modelo : string
    private categoria : 
    private año : number
    
    constructor(modelo : string, categoria : string){
         this.modelo = modelo
         this.categoria = categoria
         
    }
   
}

export enum CategoriasBicicletas {
    MONTAÑA, RUTA, CROSSCOUNTRY
}

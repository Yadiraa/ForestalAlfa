export interface TaskI {
    id?: string;
    nombre: string;
    grueso: string;
    ancho: string;
    largo: string;
    clase: string;
    bulto: string;

}
export interface Taskpedidomadera {
    id?: string;
    cliente: string;
    telefono: string;
    codigo: string;
    opcion: string;
    producto: any;

}
export interface Taskpedidotriplay {
    id?: string;
    cliente: string;
    telefono: string;
    codigo: string;
    opcion: string;
    producto: any;

}
export interface Taskpedidomuebles {
    id?: string;
    cliente: string;
    telefono: string;
    codigo: string;
    opcion: string;
    producto: any;
}

export interface TaskTriplay {
    id?: string;
    nombre: string;
    dimension: string;
    espesor: string;
    especie: string;
    calidad: string;
    bulto: string;

}
export interface TaskMuebles {
    id?: string;
    imagen: string;
    nombre: string;
    largo: string;
    ancho: string;
    altura: string;
    descripcion: string;

}
export class Objeto {
    constructor(
        public nombre: string,
        public color: string,
        public acabado: string,
    ) {
    }
    }

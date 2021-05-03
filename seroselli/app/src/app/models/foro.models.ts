export class Foro {
    id : number;
    titulo: string;
    fechaCreacion: Date;
    propietario : string;
    descripcion: string;
}

export class subForo {
    id : number;
    subid: number;
    fechaCreacion: Date;
    comentario : string;
    usuario: string;
}
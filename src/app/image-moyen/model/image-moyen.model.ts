export interface ImageMoyenModel {
    idImageMoyen : number ; 
    path: string;
    numMoyen: number;
    moyenTransport: MoyenTransport;

}

export interface MoyenTransport {
    idMoyen: number,
    numero: number,
    description: string,
    horaire: Date,
}
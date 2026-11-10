import { Compagnie } from './compagnie.model';

export class Avion {
  idAvion?: number;
  matricule?: string;
  modele?: string;
  compagnie!: Compagnie;
  capacite?: number;
  dateMiseEnService?: Date;
}

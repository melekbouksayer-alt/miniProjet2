
import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  compagnies: Compagnie[] = [];
  avions: Avion[] = [];

  constructor() {
    this.compagnies = [
      { idCompagnie: 1, nomCompagnie: 'Qatar Airways' },
      { idCompagnie: 2, nomCompagnie: 'Emirates' },
      { idCompagnie: 3, nomCompagnie: 'Etihad Airways' },
      { idCompagnie: 4, nomCompagnie: 'Tunisair' },
      { idCompagnie: 5, nomCompagnie: 'Air France' },
      { idCompagnie: 6, nomCompagnie: 'Turkish Airlines' },
      { idCompagnie: 7, nomCompagnie: 'Lufthansa' }
    ];

    this.avions = [
      {
        idAvion: 1,
        matricule: 'TS-001',
        modele: 'Airbus A320',
        compagnie: { idCompagnie: 4, nomCompagnie: 'Tunisair' },
        capacite: 180,
        dateMiseEnService: new Date('2018-05-12')
      },
      {
        idAvion: 2,
        matricule: 'QR-002',
        modele: 'Boeing 787-9',
        compagnie: { idCompagnie: 1, nomCompagnie: 'Qatar Airways' },
        capacite: 290,
        dateMiseEnService: new Date('2019-09-20')
      },
      {
        idAvion: 3,
        matricule: 'EK-003',
        modele: 'Airbus A380',
        compagnie: { idCompagnie: 2, nomCompagnie: 'Emirates' },
        capacite: 500,
        dateMiseEnService: new Date('2020-02-15')
      }
    ];
  }

  listeAvions(): Avion[] {
    return this.avions;
  }

  listeCompagnies(): Compagnie[] {
    return this.compagnies;
  }

  rechercherParCategorie(idCompagnie: number): Avion[] {
    if (!idCompagnie) {
      return [...this.avions];
    }

    return this.avions.filter(
      avion => avion.compagnie?.idCompagnie === Number(idCompagnie)
    );
  }

  rechercherParNom(nom: string): Avion[] {
    const texte = (nom || '').trim().toLowerCase();

    if (texte === '') {
      return [...this.avions];
    }

    return this.avions.filter(
      avion => (avion.modele || '').toLowerCase().includes(texte)
    );
  }

  consulterCompagnie(id: number): Compagnie {
    const compagnie = this.compagnies.find(
      c => c.idCompagnie === Number(id)
    );

    if (!compagnie) {
      throw new Error('Compagnie introuvable');
    }

    return compagnie;
  }

  ajouterAvion(avion: Avion): void {
    this.avions.push(avion);
  }

  supprimerAvion(avion: Avion): void {
    const index = this.avions.findIndex(
      a => a.idAvion === avion.idAvion
    );

    if (index > -1) {
      this.avions.splice(index, 1);
    }
  }

  consulterAvion(id: number): Avion {
    const avion = this.avions.find(
      a => a.idAvion === Number(id)
    );

    if (!avion) {
      throw new Error('Avion introuvable');
    }

    return avion;
  }

  updateAvion(avion: Avion): void {
    const index = this.avions.findIndex(
      a => a.idAvion === avion.idAvion
    );

    if (index > -1) {
      this.avions[index] = avion;
    }
  }
}
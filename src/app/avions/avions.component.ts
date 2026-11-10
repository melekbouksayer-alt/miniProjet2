import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';
import { AvionService } from '../services/avion.service';
import { AuthService } from '../services/auth.service';
import { FormAvionComponent } from '../form-avion/form-avion.component';

@Component({
  selector: 'app-avions',
  standalone: true,
  imports: [CommonModule, RouterLink, FormAvionComponent],
  templateUrl: './avions.component.html',
  styleUrl: './avions.component.css'
})
export class AvionsComponent implements OnInit {
  avions: Avion[] = [];
  compagnies: Compagnie[] = [];
  updatedAvion: Avion = this.nouvelAvion();
  ajout = true;

  constructor(
    private avionService: AvionService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerAvions();
    this.compagnies = this.avionService.listeCompagnies();
  }

  private nouvelAvion(): Avion {
    return {
      matricule: '',
      modele: '',
      compagnie: { idCompagnie: 0, nomCompagnie: '' },
      capacite: undefined,
      dateMiseEnService: undefined
    };
  }

  chargerAvions(): void {
    this.avions = [...this.avionService.listeAvions()];
  }

  ajouterOuModifierAvion(avion: Avion): void {
    if (this.ajout) {
      const prochainId = this.avionService.listeAvions().reduce(
        (max, current) => Math.max(max, current.idAvion ?? 0), 0
      ) + 1;
      avion.idAvion = prochainId;
      this.avionService.ajouterAvion(avion);
    } else {
      this.avionService.updateAvion(avion);
    }

    this.chargerAvions();
    this.updatedAvion = this.nouvelAvion();
    this.ajout = true;
  }

  updateAvion(avion: Avion): void {
    this.updatedAvion = {
      ...avion,
      compagnie: { ...avion.compagnie },
      dateMiseEnService: avion.dateMiseEnService
        ? new Date(avion.dateMiseEnService)
        : undefined
    };
    this.ajout = false;
  }

  supprimerAvion(avion: Avion): void {
    if (confirm('Etes-vous sûr de vouloir supprimer cet avion ?')) {
      this.avionService.supprimerAvion(avion);
      this.chargerAvions();
      if (!this.ajout && this.updatedAvion.idAvion === avion.idAvion) {
        this.updatedAvion = this.nouvelAvion();
        this.ajout = true;
      }
    }
  }
}

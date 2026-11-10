
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent implements OnInit {
  avions: Avion[] = [];
  compagnies: Compagnie[] = [];
  idCompagnie: number = 0;

  constructor(private avionService: AvionService) {}

  ngOnInit(): void {
    this.compagnies = this.avionService.listeCompagnies();
    this.avions = this.avionService.listeAvions();
  }

  onChange(): void {
    this.avions = this.avionService.rechercherParCategorie(
      this.idCompagnie
    );
  }
}

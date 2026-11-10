
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {

  avions: Avion[] = [];
  allAvions: Avion[] = [];

  constructor(private avionService: AvionService) {}

  ngOnInit(): void {
    this.allAvions = [...this.avionService.listeAvions()];
    this.avions = [...this.allAvions];
  }

  onKeyUp(filterText: string): void {
    const texte = filterText.toLowerCase().trim();

    this.avions = this.allAvions.filter(avion =>
      //avion.modele.toLowerCase().includes(texte)
    (avion.modele ?? '').toLowerCase().includes(texte)
    );
  }
}

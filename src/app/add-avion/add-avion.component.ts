import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';
import { AvionService } from '../services/avion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-avion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-avion.component.html',
  styleUrl: './add-avion.component.css'
})
export class AddAvionComponent implements OnInit {
  newAvion = new Avion();
  compagnies!: Compagnie[];
  newIdCompagnie!: number;
  newCompagnie!: Compagnie;

  constructor(
    private avionService: AvionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.compagnies = this.avionService.listeCompagnies();
    this.newIdCompagnie = this.compagnies[0]?.idCompagnie;
  }

  addAvion(): void {
    this.newCompagnie = this.avionService.consulterCompagnie(Number(this.newIdCompagnie));
    this.newAvion.compagnie = this.newCompagnie;
    this.avionService.ajouterAvion(this.newAvion);
    this.router.navigate(['avions']);
  }
}

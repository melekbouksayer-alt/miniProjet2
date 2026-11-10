import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-update-avion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-avion.component.html',
  styleUrl: './update-avion.component.css'
})
export class UpdateAvionComponent implements OnInit {
  currentAvion = new Avion();
  compagnies!: Compagnie[];
  updatedCompagnieId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private avionService: AvionService
  ) {}

  ngOnInit(): void {
    this.compagnies = this.avionService.listeCompagnies();
    this.currentAvion = this.avionService.consulterAvion(
      Number(this.activatedRoute.snapshot.params['id'])
    );
    this.updatedCompagnieId = this.currentAvion.compagnie.idCompagnie;
  }

  updateAvion(): void {
    this.currentAvion.compagnie = this.avionService.consulterCompagnie(
      Number(this.updatedCompagnieId)
    );
    this.avionService.updateAvion(this.currentAvion);
    this.router.navigate(['avions']);
  }
}

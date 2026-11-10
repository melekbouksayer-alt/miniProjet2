
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom-pipe',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom-pipe.component.html',
  styles: ``
})
export class RechercheParNomPipeComponent implements OnInit {

  avions: Avion[] = [];
  searchTerm = '';

  constructor(private avionService: AvionService) {}

  ngOnInit(): void {
    this.avions = [...this.avionService.listeAvions()];
  }
}

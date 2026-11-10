import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Avion } from '../model/avion.model';
import { Compagnie } from '../model/compagnie.model';

@Component({
  selector: 'app-form-avion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-avion.component.html'
})
export class FormAvionComponent implements OnChanges {
  @Input() avion!: Avion;
  @Input() compagnies: Compagnie[] = [];
  @Input() ajout = true;
  @Output() avionUpdated = new EventEmitter<Avion>();

  dateMiseEnService = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['avion'] && this.avion) {
      this.dateMiseEnService = this.avion.dateMiseEnService
        ? new Date(this.avion.dateMiseEnService).toISOString().slice(0, 10)
        : '';
    }
  }

  saveAvion(): void {
    const compagnie = this.compagnies.find(
      c => c.idCompagnie === Number(this.avion.compagnie?.idCompagnie)
    );
    if (!compagnie) {
      return;
    }

    const avionToSend: Avion = {
      ...this.avion,
      compagnie,
      dateMiseEnService: this.dateMiseEnService
        ? new Date(this.dateMiseEnService)
        : undefined
    };
    this.avionUpdated.emit(avionToSend);
  }
}

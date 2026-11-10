
import { Pipe, PipeTransform } from '@angular/core';
import { Avion } from './model/avion.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(avions: Avion[], filterText: string): Avion[] {
    const texte = (filterText || '').toLowerCase().trim();

    if (!avions) {
      return [];
    }

    return avions.filter(avion =>
      //avion.modele.toLowerCase().includes(texte)
      //toLowerCase() dosnt works
    (avion.modele ?? '').toLowerCase().includes(texte)
    );
  }
}

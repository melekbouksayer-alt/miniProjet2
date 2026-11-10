# GestionAvions

Projet Angular basé sur les Ateliers 01, 02 et 03 fournis par l'enseignant.

## Fonctionnalités
- Navbar Bootstrap
- Routing
- Liste des avions avec @for
- Model Avion
- Service AvionService
- Ajout d'un avion avec ngModel
- Suppression avec confirmation
- Modification avec ActivatedRoute
- Navigation avec Router

## Installation
Ouvrir le dossier dans VS Code puis, dans le terminal :

npm install

Puis :

ng serve

Ouvrir :
http://localhost:4200

## Routes
/avions
/add-avion
/updateAvion/:id

Le projet utilise les composants standalone, comme dans les ateliers.


## Atelier 04 appliqué : Compagnie aérienne

Le champ `compagnie` est maintenant un objet `Compagnie`, et non plus un texte libre.
Le projet contient :
- `src/app/model/compagnie.model.ts` : modèle Compagnie (`idCompagnie`, `nomCompagnie`)
- `AvionService.listeCompagnies()` et `consulterCompagnie(id)`
- une liste déroulante dans le formulaire d'ajout
- le nom de la compagnie dans le tableau des avions
- une liste déroulante dans le formulaire de modification

Compagnies proposées : Qatar Airways, Emirates, Etihad Airways, Tunisair, Air France, Turkish Airlines et Lufthansa.

Avec Node.js 22.11.0, ce dossier utilise Angular 19.2.15.
Commandes dans le dossier du projet :
1. `npm install`
2. `ng serve` (si Angular CLI global est aussi en version 19.2.15), sinon `npm start`.

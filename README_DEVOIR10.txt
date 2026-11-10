DEVOIR 10 - ANGULAR @Input() / @Output()
========================================

Projet adapte : GestionAvions (Angular standalone)

MODIFICATIONS PRINCIPALES
-------------------------
1. Nouveau composant src/app/form-avion/
   - @Input() avion : reçoit l'avion à ajouter ou modifier.
   - @Input() compagnies : reçoit la liste des compagnies.
   - @Input() ajout : indique le mode Ajouter ou Modifier.
   - @Output() avionUpdated : émet l'avion au composant parent avec EventEmitter.

2. AvionsComponent est le composant parent
   - Il transmet les données au formulaire avec [avion], [compagnies] et [ajout].
   - Il récupère l'événement avec (avionUpdated)="ajouterOuModifierAvion($event)".
   - Il actualise la liste après chaque opération.

3. AvionService conserve les opérations CRUD en mémoire dans les tableaux JSON
   - listeAvions() : Read
   - ajouterAvion() : Create
   - updateAvion() : Update
   - supprimerAvion() : Delete
   Aucune API Backend n'est utilisée pour ces opérations.

4. Le formulaire Ajouter/Modifier est intégré dans la page /avions.
   Le lien Ajouter du menu conduit maintenant à /avions.

DEMARRAGE
---------
1. Extraire le ZIP.
2. Ouvrir le dossier miniProjet1-main dans VS Code.
3. Ouvrir un terminal dans ce dossier.
4. Exécuter :
      npm install
      npm start
5. Ouvrir http://localhost:4200

CONNEXION
---------
Le projet conserve l'authentification existante.
Compte administrateur présent dans AuthService :
   username : admin
   password : 123

IMPORTANT
---------
Les données sont stockées dans des tableaux en mémoire. Elles reviennent aux valeurs
initiales après le redémarrage de l'application, conformément à la consigne sans Backend.

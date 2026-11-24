
# MLD — Application Restaurant

## 1. REPAS

| Colonne | Clé |
|---|---|
| code_repas | PK |
| nom_repas | — |
| description_repas | — |
| prix_repas | — |
| code_categorie | FK |

## 2. CATEGORIE

| Colonne | Clé |
|---|---|
| code_categorie | PK |
| nom_categorie | — |

## 3. CLIENT

| Colonne | Clé |
|---|---|
| code_client | PK |
| nom_client | — |
| prenom_client | — |
| email_client | — |
| telephone_client | — |

## 4. COMMANDE

| Colonne | Clé |
|---|---|
| code_commande | PK |
| date_commande | — |
| heure_commande | — |
| statut_commande | — |
| code_client | FK |

## 5. CONTENIR

| Colonne | Clé |
|---|---|
| code_commande | PK, FK |
| code_repas | PK, FK |
| quantite_commandee | — |
| prix_unitaire_commande | — |

---

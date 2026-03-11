![npm badge](https://img.shields.io/badge/npm-v11.9.0-pink)
![node badge](https://img.shields.io/badge/node-v11.9.0-pink)
![javascript badge](https://img.shields.io/badge/javascript-pink)

# Mon API nodejs

# Table des matières

- [DOCUMENTATION DE SPECIFICATIONS FONCTIONNELLES][1]
- [DOCUMENTATION TECHNIQUE][2]

[1]: ./functional_documentation.md

## Description du projet
Il s'agit d'une API REST pour la gestion centralisée d'un forum

## A qui s'adresse ce projet ?
Ce projet est destiné à des développeurs qui souhaite avoir un back qui communique avec différentes plateformes

## Dépendances du projet
```JSON
"dependencies": {
  "bcrypt": "^6.0.0",
  "dotenv": "^17.3.1",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongodb": "^7.1.0",
  "mongoose": "^9.2.3",
  "morgan": "^1.10.1",
  "nodemon": "^3.1.14",
  "redis": "^5.11.0"
},
"devDependencies": {
    "@eslint/js": "^10.0.1",
    "@faker-js/faker": "^10.3.0",
    "eslint": "^10.0.2",
    "globals": "^17.4.0"
}
```

## Instruction d'utilisation
Pour commencer à utiliser l'api, vous devez dans un premier temps cloner le répository.

### Installer le projet

1. Cloner le répository
    ```BASH
    git clone https://github.com/raniabadis00-ai/mon-api-nodejs.git
    ```
2. Changer le remote
    >Prérequis : vous devez créer un répository en amont sur votre github
    ```BASH
    cd nom-dossier-projet/
    git add remote origin https://github.com/votre-pseudo/votre-repository.git
    git push -u origin nom-branch
    ```
3. Installer les dépendances
    ```BASH
    npm install
    ```

## Exécuter l'API
```BASH
npm run start
```



Date : 11/03/2026

Statut :

- [x] Brouillon
- [ ] En validation
- [ ] Validé

## HISTORIQUE DES VERSIONS

| Version   | Date       | Auteur      | Description         |
|-----------|------------|-------------|---------------------|
| v1.0      | 11/03/2026 | Badis Rania | Création de contenu |

## 1. CONTEXT DU PROJET

### 1.1 Présentation générale

> Ce document décrit les spécifications fonctionnelles d'une API REST Stateless destinée à une gestion centralisée d'un forum.

Dans un contexte de croissance et de diversification des canaux (application mobile, application web, interface)




---
title: Gérez tous vos mots de passe avec Bitwarden et Vaultwarden
date: 2023-04-10T14:54:06+02:00
author: nazim
draft: true
categories: [ Open Source ]
tags: [ Sécurité, Mots de passe ]
---

Il existe de nombreux gestionnaires de mots de passe, qu'ils soient gratuits ou payants, ils permettent de stocker vos mots de passe de manière (relativement) sécurisée et d'y accéder facilement avec une intégration dans votre navigateur et votre smartphone.

Parmi les solutions propriétaires nous avons 1Password, LastPass ou encore Dashlane. Ces solutions possèdent certaines fonctionnalités payantes et sont souvent accessibles via un abonnement mensuel ou annuel. Nous allons ici nous intéresser aux solutions Open Source dont le code source est disponible publiquement et qui sont donc gratuites.

Il existe de nombreux gestionnaires de mots de passe Open Source comme KeePass ou Padloc, mais après plusieurs années d'utilisation de ces solutions, je pense aujourd'hui que le meilleur est Bitwarden et c'est celui que je vais vous présenter ici.

Il faut savoir que Bitwarden propose un service avec des offres payantes et une gratuite limitée : [bitwarden.com/pricing/](https://bitwarden.com/pricing/). Il est par ailleurs possible d'utiliser Bitwarden en l'hébergeant soi-même car leur code source est accessible publiquement : [github.com/bitwarden](https://github.com/bitwarden).

Il faut savoir que certaines fonctionnalités de la version payantes ne sont pas disponibles dans la version gratuite, et pour cette raison je vous propose de découvrir un autre projet Open Source qui permet d'héberger Bitwarden soi-même : Vaultwarden. Avec cette solution, vous pouvez utiliser toutes les interfaces et applications mobiles de Bitwarden, et vous aurez accès à l'intégralité des fonctionnalités : [github.com/dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden).

## Aperçu


## Démarrage rapide

Vous pouvez utiliser le fichier de configuration suivant pour démarrer un serveur Vaultwarden avec Docker :

{{< github "configs/bitwarden.yml" >}}

Si NodeJS est installé sur votre machine ([en savoir plus sur NodeJS](/posts/nodejs/)), vous pouvez utiliser la commande :
```bash
npx bosquet -y bitwarden
```

Sinon, pour n'utiliser que Docker ([en savoir plus sur Docker](/posts/docker/)), vous pouvez utiliser la commande :
```bash
docker run --rm -it -v $HOME/.bosquet/:/root/.bosquet node:alpine npx -y bosquet bitwarden
```

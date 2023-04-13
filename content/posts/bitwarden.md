---
title: Gérez tous vos mots de passe avec Bitwarden et Vaultwarden
date: 2023-04-04T04:20:00+01:00
author: nazim
draft: false
categories: [ Open Source ]
tags: [ Sécurité, Mots de passe ]
---

Il existe de nombreux gestionnaires de mots de passe, qu'ils soient gratuits ou payants, ils permettent de stocker vos mots de passe de manière (relativement) sécurisée et d'y accéder facilement avec une intégration dans votre navigateur et votre smartphone.

Parmi les solutions propriétaires nous avons 1Password, LastPass ou encore Dashlane. Ces solutions possèdent certaines fonctionnalités payantes et sont souvent accessibles via un abonnement mensuel ou annuel. Nous allons ici nous intéresser aux solutions Open Source dont le code source est disponible publiquement et qui sont donc gratuites.

Il existe de nombreux gestionnaires de mots de passe Open Source comme KeePass ou Padloc, mais après plusieurs années d'utilisation de ces solutions, je pense aujourd'hui que le meilleur est Bitwarden et c'est celui que je vais vous présenter ici.

Il faut savoir que Bitwarden propose un service avec des offres payantes et une gratuite limitée : [bitwarden.com/pricing/](https://bitwarden.com/pricing/). Il est par ailleurs possible d'utiliser Bitwarden en l'hébergeant soi-même car leur code source est accessible publiquement : [github.com/bitwarden](https://github.com/bitwarden).

Certaines fonctionnalités de la version payante ne sont pas disponibles dans le code source public, c'est pour cette raison je vous propose de découvrir un autre projet qui permet d'héberger Bitwarden soi-même : Vaultwarden. Avec cette solution, vous pouvez utiliser toutes les interfaces et applications mobiles de Bitwarden, et vous aurez accès à l'intégralité des fonctionnalités : [github.com/dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden).


# Aperçu

Après avoir installé Vaultwarden, vous pouvez utiliser la version web de Bitwarden, vous pourrez à partir de là vous inscrire :

![Bitwarden - web - liste](/images/bitwarden/web-register.png)

Et ensuite bien évidement vous connecter :

![Bitwarden - web - liste](/images/bitwarden/web-login.png)

Vous aurez ensuite accès à votre liste de mots de passe :

![Bitwarden - web - liste](/images/bitwarden/web-list.png)

Pour une utilisation plus pratique, vous pouvez installer l'extension de votre navigateur :

![Bitwarden - extension - liste](/images/bitwarden/extension-list.png)

Depuis laquelle vous pourrez administrer vos mots de passe :

![Bitwarden - extension - édition](/images/bitwarden/extension-edit.png)

Il est également possible de générer des mots de passe :

![Bitwarden - extension - génération de mot de passe](/images/bitwarden/extension-generate.png)

Enfin, vous pouvez utiliser l'application mobile de Bitwarden qui peut facilement être utilisée par votre clavier par exemple pour vous connecter à un site :

![Bitwarden - application mobile - affichage sur le clavier](/images/bitwarden/mobile-keyboard.jpg)


# Ressources

Liste de toutes les applications : [bitwarden.com/download/](https://bitwarden.com/download/)

Extension Chrome : [chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb)

Application Android : [play.google.com/store/apps/details?id=com.x8bit.bitwarden](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)


# Démarrage rapide

{{< getting_started "Vaultwarden" "bitwarden" >}}

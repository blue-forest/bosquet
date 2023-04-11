---
title: Bloquez les publicités et les traceurs sur tous vos appareils avec AdGuard Home
date: 2023-04-10T14:54:06+02:00
author: nazim
draft: true
categories: [ Open Source ]
tags: [ Sécurité, Réseau ]
---

Il existe de multiples manières de bloquer les publicités et les traceurs sur Internet, la plus commune et la simple étant d'utiliser une extension pour votre navigateur. Vous avez par exemple AdBlock ou uBlock Origin qui sont des solutions populaires et efficaces.

Le fonctionnent de ces extensions est simple : elles bloquent les requêtes vers des serveurs publicitaires quand vous visitez un site web et ainsi vous évitent de voir des publicités. Cependant, ces extensions ne fonctionnent que pour votre navigateur et ne protègent pas les autres appareils de votre réseau local, c'est là que l'utilité d'un serveur DNS entre en jeu.

Un serveur DNS est un programme qui permet de résoudre les noms de domaines en adresses IP. Par exemple, quand vous tapez `bosquet.blueforest.cc` dans votre navigateur, votre navigateur va demander à votre serveur DNS quelle est l'adresse IP qu'il faut utiliser pour accéder à ce site. Là où ça devient intéressant, c'est que vous pouvez utiliser un serveur DNS qui filtre les requêtes et qui bloque les publicités et les traceurs avant même que votre navigateur ne les reçoive.

De manière générale, le serveur DNS que vous utilisez est celui de votre Fourreur d'Accès Internet (FAI). C'est lui qui va vous donner l'adresse IP du site que vous demandez. Cependant, vous pouvez utiliser un autre serveur DNS, comme par exemple celui de Google (`8.8.8.8`) ou encore celui de Cloudflare (`1.1.1.1`). Ces serveurs DNS sont gratuits et ne vous demandent pas de créer de compte. Un serveur DNS peut être configuré sur votre ordinateur, votre smartphone ou votre routeur pour qu'il soit utilisé par tous les appareils de votre réseau local.

Aujourd'hui nous allons voir comment héberger notre propre serveur DNS et qui va faire office de filtre pour bloquer les publicités et traceurs avant de demander à un autre serveur DNS (ceux cités plus haut) de résoudre le nom de domaine. Parmi les projets Open Source qui permettent de faire cela, vous avez par exemple [Pi-Hole](https://pi-hole.net), [DNSCrypt](https://www.dnscrypt.org) ou encore [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome), celui que nous allons utiliser ici.


# Aperçu

Voici un exemple ce qui est affiché dans le tableau de bord d'AdGuard Home :

![](/images/adguard/dashboard.png)

Une liste détaillée de toutes les requêtes DNS est disponible :

![](/images/adguard/queries.png)

Il est possible de configurer un grand nombre de paramètres pour la configuration des serveurs DNS externes, du chiffrement ou encore du réseau local :

![](/images/adguard/settings.png)

Il est très facile d'ajouter des filtres supplémentaires en important des listes de filtres existantes :

![](/images/adguard/filters.png)


# Démarrage rapide

{{< getting_started "Adguard Home" "adguard" >}}

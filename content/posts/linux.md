---
title: Comprendre et facilement utiliser Linux
date: 2023-04-12T04:20:00+01:00
author: nazim
draft: true
categories: [ Guides ]
tags: [ Systèmes d'exploitation, Linux ]
---

Linux est un système d'exploitation libre et gratuit qui est utilisé par des millions de personnes dans le monde entier. Il est très populaire parmi les développeurs et est utilisé par de très nombreuses entreprises sur leurs serveurs. L'une des principales raisons pour laquelle Linux est si populaire est qu'il est extrêmement personnalisable et peut être adapté à de nombreuses tâches différentes tout en ayant des performances élevées tout en étant totalement transparent. Il est également très sécurisé et ne nécessite pas de licence payante pour être utilisé.

Contrairement aux idées reçues, Linux n'est pas seulement fait pour des utilisateurs avancés, il est en réalité très facile à apprendre et à utiliser. Dans cet article, nous allons vous montrer comment vous pouvez facilement vous familiariser avec Linux et commencer à l'utiliser. Que vous soyez un utilisateur Windows ou Mac, vous aurez la possibilité d'y accéder avec peu de connaissances préalables.



# Distributions Linux

La première chose que vous devez savoir est que Linux n'est pas en soi un système d'exploitation mais un noyau. Un noyau est le cœur d'un système d'exploitation et est responsable de la gestion des ressources matérielles et de la communication avec les applications. Linux a été créé par Linus Torvalds en 1991 et son code source est disponible sur GitHub : [github.com/torvalds/linux](https://github.com/torvalds/linux).

Depuis sa création, Linux a été utilisé comme noyau pour de nombreux systèmes d'exploitation différents, les plus populaires sont Debian, Arch Linux ou encore Red Hat. Pour faire simple, une distribution Linux est un assemblage de différents programmes, une pré-configuration pour tous ces derniers et des outils pour les installer et les mettre à jour. Chaque distribution Linux a ses propres caractéristiques et est adaptée à un usage particulier. Elles sont très nombreuses et vous pouvez en trouver [une liste complète sur Wikipédia](https://fr.wikipedia.org/wiki/Liste_des_distributions_GNU/Linux), mais nous allons nous concentrer sur les plus populaires. Chez Blue Forest par exemple nous utilisons [Fedora](#fedora) et [Arch Linux](#arch-linux) pour nos machines de développement.

Avant de commencer à mettre en avant des distributions Linux, il est important de comprendre que la partie visuelle - et de manière générale votre expérience utilisateur - ne dépend pas directement de la distribution que vous utilisez, mais de l'environnement de bureau que vous choisissez. La section [Environnements de bureau](#environnements-de-bureau) vous en dira plus à ce sujet et vous permettra de choisir celui qui vous convient le mieux sachant que vous pouvez en installer plusieurs et les changer à la volée.


## Fedora

![](https://upload.wikimedia.org/wikipedia/commons/8/8f/Fedora_logo_%282021%29.svg?download)

Fedora est une distribution Linux créée en 2003 par  l'entreprise Red Hat. Vous pouvez en apprendre plus [sur leur site officiel](https://fedoraproject.org/fr/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/Fedora_Linux). Leur code source est disponible sur [src.fedoraproject.org](https://src.fedoraproject.org/). L'environnement de bureau par défaut est [GNOME](#gnome).

Chez Blue Forest par exemple nous utilisons [Arch Linux](#arch-linux) et [Fedora](#fedora) sur nos machines. Nous vous conseillons de tester plusieurs distributions pour trouver celle qui vous convient le mieux, nous verrons comment le faire un peu plus loin dans cet article. Si vous ne savez pas par où commencer, nous vous conseillons de partir sur [Linux Mint](#linux-mint) ou [Fedora](#fedora).


## Debian

![](https://upload.wikimedia.org/wikipedia/commons/4/4a/Debian-OpenLogo.svg?download)

Debian est une très ancienne distribution Linux, elle a été créée en 1993 par Ian Murdock. Vous pouvez en apprendre plus [sur leur site officiel](https://www.debian.org/intro/why_debian) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/Debian). Son code source est disponible sur [sources.debian.org](https://sources.debian.org/). L'environnement de bureau par défaut est [GNOME](#gnome), mais vous pouvez en installer d'autres facilement.



## Ubuntu

![](https://upload.wikimedia.org/wikipedia/commons/9/9d/Ubuntu_logo.svg?download)

Ubuntu est une distribution Linux basée sur [Debian](#debian) et a été créée en 2004 par Mark Shuttleworth. Vous pouvez en apprendre plus [sur le site de sa communauté francophone](https://www.ubuntu-fr.org/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/Ubuntu_(syst%C3%A8me_d%27exploitation)). Son code source est disponible sur [launchpad.net](https://launchpad.net/ubuntu). L'environnement de bureau par défaut est [GNOME](#gnome), mais vous pouvez en installer d'autres facilement ([Kubuntu](https://doc.ubuntu-fr.org/kubuntu), [Xubuntu](https://doc.ubuntu-fr.org/xubuntu), ...).


## Arch Linux

![](https://upload.wikimedia.org/wikipedia/commons/e/e8/Archlinux-logo-standard-version.png?download)

Arch Linux est une distribution Linux très populaire, créée en 2002 elle fut déclinée en différentes sous-distributions dont nous allons parler juste après. Vous pouvez en apprendre plus [sur le site de sa communauté francophone](https://archlinux.fr/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/Arch_Linux). Leur code source est disponible sur [github.com/archlinux](https://github.com/archlinux). Pour utiliser Arch Linux si vous êtes débutant, nous vous conseillons d'utiliser une sous-distribution mais vous pouvez aussi l'utiliser directement avec des outils comme [Arch Installer](https://github.com/archlinux/archinstall).


## Manjaro

![](https://upload.wikimedia.org/wikipedia/commons/8/85/Manjaro_logo_text.svg?download)

Manjaro est une distribution basée sur [Arch Linux](#arch-linux) créée en 2012. Vous pouvez en apprendre plus sur [leur site officiel](https://manjaro.org/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/Manjaro_Linux). Leur code source est disponible sur [github.com/manjaro](https://github.com/manjaro). L'environnement de bureau par défaut est [GNOME](#gnome).


## Fedora

![](https://upload.wikimedia.org/wikipedia/commons/8/8f/Fedora_logo_%282021%29.svg?download)

Fedora a été créée en 2002 par l'entreprise Red Hat. Vous pouvez en apprendre plus [sur leur site officiel](https://fedoraproject.org/fr/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/Fedora_Linux). Son code source est disponible sur [src.fedoraproject.org](https://src.fedoraproject.org/). L'environnement de bureau par défaut est [GNOME](#gnome) mais vous pouvez en installer d'autres facilement.


## Linux Mint

![](https://upload.wikimedia.org/wikipedia/commons/4/45/The_Linux_Mint_Logo.svg?download)

Linux Mint est une distribution basée sur [Ubuntu](#ubuntu) créée en 2006. Vous pouvez en apprendre plus [sur leur site officiel](https://linuxmint.com/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/Linux_Mint). Son code source est disponible sur [github.com/linuxmint](https://github.com/linuxmint). L'environnement de bureau par défaut est [Cinnamon](#cinnamon) mais il existe par ailleurs des versions avec [MATE](#mate) ou [Xfce](#xfce).


## NixOS

![](https://upload.wikimedia.org/wikipedia/commons/c/c4/NixOS_logo.svg?download)

NixOS est une distribution Linux créée en 2003 et est un peu plus complexe que les autres car elle utilise un principe très différent : tout votre système d'exploitation est décrit dans des fichiers de configurations, ce qui permet très facilement de le répliquer ou de revenir en arrière. Vous pouvez en apprendre plus [sur leur site officiel](https://nixos.org/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/NixOS). Son code source est disponible sur [github.com/NixOS](https://github.com/NixOS). Avant de l'utiliser, nous vous conseillons d'avoir déjà quelques notions sur Linux et de bien vous renseigner sur son fonctionnement. Nous l'avons inclus dans cette liste car il est très intéressant et passionnant à explorer.



# Environnements de bureau

Maintenant que nous avons fait un tour des distributions Linux, il est important de vous introduire au concept d'environnement de bureau. Un environnement de bureau est un programme qui permet de gérer l'interface graphique de votre système d'exploitation. Il existe de nombreux environnements de bureau différents, chacun ayant ses propres caractéristiques et son propre style.

Vous pouvez en installer plusieurs et les changer à la volée ce qui vous permet de tester différents environnements de bureau et de choisir celui qui vous convient le mieux. Il ne faut donc pas choisir une distribution Linux en fonction de l'environnement de bureau qu'elle utilise, mais plutôt choisir une distribution qui vous convient et ensuite choisir l'environnement de bureau que vous souhaitez utiliser.

## GNOME

![](https://upload.wikimedia.org/wikipedia/commons/0/06/Gnome-40-shell.png?download)

GNOME a été créé en 1999, vous pouvez en apprendre plus [sur leur site officiel](https://www.gnome.org/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/GNOME). Son code source est disponible sur [gitlab.gnome.org](https://gitlab.gnome.org/GNOME). Il est très complet et possède de nombreuses fonctionnalités. Il est très simple à utiliser et est très bien adapté aux débutants. Il est très personnalisable et vous pouvez facilement changer son apparence avec des thèmes et des extensions.

## KDE

![](https://upload.wikimedia.org/wikipedia/commons/a/a9/KDE_Plasma_5.16.png?download)

KDE a été créé en 1998 et comme [GNOME](#gnome) est très complet. Vous pouvez en apprendre plus [sur leur site officiel](https://kde.org/fr/) ou sur [Wikipédia](https://fr.wikipedia.org/wiki/KDE). Son code source est disponible sur [invent.kde.org](https://invent.kde.org/).


## Xfce

![](https://upload.wikimedia.org/wikipedia/commons/2/21/Xfce-4.12.png?download)

1996

https://www.xfce.org

https://fr.wikipedia.org/wiki/Xfce

## LXDE

## Cinnamon

## MATE

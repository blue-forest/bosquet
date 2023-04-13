---
title: Comprendre et facilement utiliser Docker
date: 2023-04-10T04:20:00+01:00
author: nazim
draft: false
categories: [ Guides ]
tags: [ Conteneurs, Développement ]
---

Docker est un outil permettant de créer des conteneurs, c'est-à-dire des environnements virtuels permettant d'exécuter des applications de manière isolée et identique sur n'importe quelle machine. C'est un projet Open Source qui est très populaire et qui est aujourd'hui utilisé par une majorité d'entreprises pour des besoins de développement, de test et de production.

Nous allons rapidement voir ce qu'est un conteneur, comment Docker fonctionne et comment l'utiliser. Nous allons fonctionner avec un apprentissage par l'exemple, il va donc falloir installer Docker sur votre machine :
- sur Windows : [docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)
- sur macOS : [docs.docker.com/desktop/install/mac-install/](https://docs.docker.com/desktop/install/mac-install/)
- sur Linux : [docs.docker.com/desktop/install/linux-install/](https://docs.docker.com/desktop/install/linux-install/)


# Premier conteneur

Une fois installé, vous pouvez lancer Docker Desktop et vérifier que tout fonctionne correctement en lançant la commande suivante dans un terminal (ou PowerShell sur Windows) :
```bash
docker run --rm alpine echo "Bonjour, je suis un conteneur !"
```

Pour mieux comprendre ce que fait cette commande, nous allons la décomposer :
- `docker` : c'est le nom de la commande Docker qui permet de dialoguer avec le service Docker
- `run` : instruction permettant de lancer un conteneur
- `--rm` : option permettant de supprimer le conteneur une fois qu'il a été exécuté
- `alpine` : nom du modèle de conteneur (appelé image) à utiliser pour créer le conteneur
- `echo "Bonjour, je suis un conteneur !"` : commande à exécuter dans le conteneur

Le résultat de cette commande sera normalement le suivant :
```
Unable to find image 'alpine:latest' locally
latest: Pulling from library/alpine
f56be85fc22e: Already exists
Digest: sha256:124c7d2707904eea7431fffe91522a01e5a861a624ee31d03372cc1d138a3126
Status: Downloaded newer image for alpine:latest
Bonjour, je suis un conteneur !
```

Ici, Docker vérifie d'abord si l'image `alpine` est présente sur votre machine, comme ce n'est pas le cas il la récupère depuis [Docker Hub](https://hub.docker.com/) qui est un registre d'images Docker. Une fois l'image récupérée, Docker crée un conteneur à partir de cette image et exécute la commande `echo "Bonjour, je suis un conteneur !"` dans ce conteneur. Enfin, une fois la commande exécutée, Docker supprime le conteneur.


# Rentrer dans un conteneur

Un conteneur est un environnement virtuel isolé, il possède donc son propre système de fichiers, ses propres processus, ses propres ressources réseau, etc. Nous allons voir comment nous pouvons rentrer dans un conteneur pour interagir avec son système de fichiers et ses processus, pour cela exécutez la commande suivante :

```bash
docker run --rm -it alpine sh
```

Une fois dans le conteneur, vous pouvez par exemple exécuter les commandes :
- `ls` pour lister les fichiers présents dans le répertoire courant
- `cd` pour vous déplacer dans un autre répertoire
- `ps` pour lister les processus en cours d'exécution


# Créer un dossier partagé entre le conteneur et votre machine

Comme nous l'avons vu précédemment, un conteneur est un environnement virtuel isolé, il possède donc son propre système de fichiers, mais il est possible de créer un dossier partagé entre le conteneur et votre machine. Pour cela, nous allons utiliser la commande suivante :

```bash
docker run --rm -v $(pwd):/app -w /app alpine ls -la
```

Dans cette commande, nous avons :
- `docker run` : instruction permettant de lancer un conteneur
- `--rm` : option permettant de supprimer le conteneur une fois qu'il a été exécuté
- `-v` : option permettant de préciser un dossier partagé entre le conteneur et votre machine
- `$(pwd)` : dossier présent sur l'hôte (votre machine), ici nous utilisons la commande `pwd` qui permet de récupérer le chemin du répertoire courant mais vous pouvez également utiliser un chemin (par exemple `/tmp/test`)
- `:` : séparateur entre le dossier présent sur l'hôte et le dossier présent dans le conteneur
- `/app` : dossier présent dans le conteneur
- `-w /app` : option qui n'est pas obligatoire mais qui permet de définir le répertoire courant du conteneur lorsqu'il est lancé
- `alpine` : nom du modèle d'image à utiliser pour créer le conteneur
- `ls -la` : commande à exécuter dans le conteneur, ici nous listons les fichiers présents dans le répertoire `/app`


# Accéder aux ports d'un conteneur

Maintenant que nous avons vu comment créer un dossier partagé entre le conteneur et votre machine, nous allons voir comment accéder aux ports d'un conteneur. Pour cela, nous allons utiliser l'image [nginx](https://hub.docker.com/_/nginx) qui est une image Docker permettant de lancer un serveur web Nginx. Pour lancer un serveur web Nginx dans un conteneur, exécutez la commande suivante :

```bash
docker run --rm -d -p 8080:80 nginx
```

Dans cette commande, nous avons :
- `docker run` : instruction permettant de lancer un conteneur
- `--rm` : option permettant de supprimer le conteneur une fois qu'il a été exécuté
- `-d` : option permettant de lancer le conteneur en mode détaché, c'est-à-dire que le conteneur continue de fonctionner en arrière-plan
- `-p` : option permettant de préciser un port à exposer
- `8080` : port présent sur l'hôte (votre machine), ici nous utilisons le port `8080` mais vous pouvez utiliser un autre port
- `:` : séparateur entre le port présent sur l'hôte et le port présent dans le conteneur
- `80` : port présent dans le conteneur
- `nginx` : nom de l'image à utiliser pour créer le conteneur

Si vous ouvrez votre navigateur et que vous allez sur l'adresse [localhost:8080](http://localhost:8080), vous devriez voir la page par défaut de Nginx.


# Définir des variables d'environnement

Un conteneur comme tout système d'exploitation possède des variables d'environnement contenant des informations sur le système ou des configurations. Lors de la création d'un conteneur, il est possible de définir des variables d'environnement avec des valeurs spécifiques. Pour cela, nous allons utiliser la commande suivante :

```bash
docker run --rm -e APP_ENV=dev alpine env
```

Dans cette commande, nous avons :
- `docker run` : instruction permettant de lancer un conteneur
- `--rm` : option permettant de supprimer le conteneur une fois qu'il a été exécuté
- `-e` : option permettant de définir une variable d'environnement
- `APP_ENV=dev` : variable d'environnement `APP_ENV` avec la valeur `dev`
- `alpine` : nom de l'image à utiliser pour créer le conteneur
- `env` : commande à exécuter dans le conteneur, ici nous listons les variables d'environnement

Dans la liste des variables d'environnement, vous devriez voir la variable `APP_ENV` avec la valeur `dev`.


# Voir la liste des conteneurs

La précédente commande a été exécutée en mode détaché, c'est-à-dire que le conteneur continue de fonctionner en arrière-plan. Pour voir la liste des conteneurs en cours d'exécution, vous pouvez exécuter la commande suivante :
```bash
docker ps
```

Vous devriez voir une liste de conteneurs, dont le conteneur Nginx que nous avons lancé précédemment :
```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
ebf116196f75   nginx     "/docker-entrypoint.…"   6 seconds ago   Up 20 seconds  0.0.0.0:8080->80/tcp, :::8080->80/tcp   affectionate_robinson
```

Vous remarquerez que le conteneur Nginx a été nommé `affectionate_robinson` par Docker dans notre cas, mais ce nom est généré aléatoirement. Si vous voulez donner un nom à votre conteneur, vous pouvez utiliser l'option `--name` :
```bash
docker run --rm -d -p 8080:80 --name nginx-server nginx
```

Dernière chose importante, la commande `ps` par défaut ne liste que les conteneurs en cours d'exécution, si vous voulez voir tous les conteneurs, même ceux qui ne sont pas en cours d'exécution, vous pouvez exécuter la commande suivante :
```bash
docker ps -a
```


# Arrêter et supprimer un conteneur

Pour arrêter un conteneur, vous pouvez exécuter la commande suivante :
```bash
docker stop ebf116196f75
```

Vous pouvez également utiliser le nom du conteneur :
```bash
docker stop nginx-server
```

Pour supprimer un conteneur, si vous n'avez pas utilisé l'option `--rm` lors de la création du conteneur, vous pouvez exécuter la commande suivante :
```bash
docker rm nginx-server
```

Pour arrêter un conteneur et le supprimer en même temps, vous pouvez exécuter la commande suivante :
```bash
docker rm -f nginx-server
```

Si vous voulez supprimer tous les conteneurs en cours d'exécution, vous pouvez exécuter la commande suivante :
```bash
docker rm -f $(docker ps -q)
```

Si vous voulez supprimer tous les conteneurs, même ceux qui ne sont pas en cours d'exécution, vous pouvez exécuter la commande suivante :
```bash
docker rm -f $(docker ps -aq)
```


# Exécuter plus facilement des conteneurs

Jusqu'à présent nous avons vu comment créer un conteneur avec la commande `docker run`, mais il est également possible de créer des conteneurs avec la commande `docker compose` sans avoir a écrire toutes les options via un terminal. Pour cela, nous allons créer un fichier `docker-compose.yml` qui contiendra les instructions permettant de créer un ou plusieurs conteneurs, par exemple :
```yaml
version: "3.7"
services:
  nginx1:
    image: nginx
    volumes:
    - .:/usr/share/nginx/html
    environment:
      APP_ENV: dev
    ports:
    - "8080:80"
```

Dans ce fichier, nous avons :
- `version` : version de la syntaxe utilisée dans le fichier, ici nous utilisons la version `3.7`
- `services` : section contenant la liste des services à créer
- `nginx1` : nom du service, vous pouvez en créer plusieurs et les nommer comme vous le souhaitez
- `image` : nom de l'image à utiliser pour créer le conteneur
- `volumes` : section contenant la liste des volumes à monter dans le conteneur, ici nous montons le dossier courant dans le dossier `/usr/share/nginx/html` du conteneur
- `environment` : section contenant la liste des variables d'environnement à définir dans le conteneur, ici nous définissons la variable `APP_ENV` avec la valeur `dev`
- `ports` : section contenant la liste des ports à exposer, ici nous exposons le port `80` du conteneur sur le port `8080` de notre machine

Une fois le fichier `docker-compose.yml` créé, vous pouvez créer le conteneur en exécutant la commande suivante :
```bash
docker compose up
```

Le conteneur sera créé et vous pourrez voir les logs du conteneur dans votre terminal. Si vous voulez créer le conteneur en mode détaché, vous pouvez exécuter la commande suivante :
```bash
docker compose up -d
```

Pour voir les logs du conteneur en mode détaché, vous pouvez utiliser la commande suivante :
```bash
docker compose logs -f
```

Pour arrêter les conteneurs créés avec la commande `docker compose`, vous pouvez utiliser la commande suivante :
```bash
docker compose down
```

Enfin, voici un cas complexe pour vous montrer comment créer plusieurs conteneurs avec la commande `docker compose` et dont nous avons besoin d'une communication entre les conteneurs :
```yaml
version: "3.7"
services:
  database:
    image: mariadb
    volumes:
    - ./database:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: test
      MYSQL_USER: test
      MYSQL_PASSWORD: test
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    ports:
    - "8080:80"
    environment:
      PMA_HOST: database
      PMA_USER: test
      PMA_PASSWORD: test
```

Ici nous avons deux conteneurs :
- `database` : conteneur contenant la base de données [MariaDB](https://hub.docker.com/_/mariadb) dont nous avons besoin pour notre application
- `phpmyadmin` : conteneur contenant l'interface [phpMyAdmin](https://hub.docker.com/r/phpmyadmin/phpmyadmin) qui nous permet de gérer notre base de données, ici nous avons besoin de communiquer avec le conteneur `database` pour pouvoir se connecter à la base de données


# Créer une image Docker

Nous avons vu comment créer un conteneur à partir d'une image Docker, mais il est également possible de créer une image personnalisée à partir d'une autre image existante. Pour cela, nous allons utiliser l'image [nginx](https://hub.docker.com/_/nginx) que nous avons utilisée précédemment.

Pour créer une image personnalisée à partir de l'image `nginx`, nous allons créer un fichier `Dockerfile` qui contiendra les instructions permettant de créer notre image personnalisée :
```
FROM nginx:latest
COPY index.html /usr/share/nginx/html
```

Pour cet exemple, nous avons créé un fichier `index.html` qui contient le code suivant :
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
    </head>
    <body>
        <h1>Bonjour tout le monde !</h1>
    </body>
</html>
```

Une fois le fichier `Dockerfile` et le fichier `index.html` créés, vous pouvez créer votre image personnalisée en exécutant la commande suivante :
```bash
docker build -t nginx-hello .
```

Dans cette commande, nous avons :
- `docker build` : instruction permettant de créer une image Docker
- `-t` : option permettant de donner un nom à l'image
- `nginx-hello` : nom de l'image
- `.` : chemin du dossier contenant les fichiers `Dockerfile` et `index.html`


Si vous exécutez la commande `docker images`, vous devriez voir votre image `nginx-hello` :
```
REPOSITORY          TAG       IMAGE ID       CREATED          SIZE
nginx-hello         latest    1b0b1b0b1b0b   10 seconds ago   142MB
```

Vous pouvez maintenant lancer un conteneur à partir de cette image en exécutant la commande suivante :
```bash
docker run --rm -d -p 8080:80 nginx-hello
```

Si vous ouvrez votre navigateur et que vous allez sur l'adresse [localhost:8080](http://localhost:8080), vous devriez voir la page que nous avons créée.

Pour supprimer l'image `nginx-hello`, vous pouvez exécuter la commande suivante :
```bash
docker rmi nginx-hello
```

Pour en savoir plus sur les instructions que vous pouvez utiliser dans un fichier `Dockerfile`, vous pouvez consulter la [documentation officielle](https://docs.docker.com/engine/reference/builder/).

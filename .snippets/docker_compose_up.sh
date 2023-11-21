#!/bin/sh

SNIPPET_NAME=$1

if [ -z "$SNIPPET_NAME" ]; then
  echo "Please provide a name snippet name"
  exit 1
fi

SNIPPET_PATH=.snippets/docker/$SNIPPET_NAME.yml

if [ ! -f "$SNIPPET_PATH" ]; then
  echo "Snippet $SNIPPET_NAME does not exist"
  exit 1
fi

docker compose -f $SNIPPET_PATH up

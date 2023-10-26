#!/bin/bash

UPLOADS_DIR="public/uploads/"
SQLITE_FILE=".tmp/db.sqlite"
WORK_DIR="/tmp/strapi_restore"

BACKUP_ZIP="$1"

rm -rf $WORK_DIR
mkdir $WORK_DIR

unzip $BACKUP_ZIP -d $WORK_DIR

mv "$WORK_DIR/db.sqlite" $SQLITE_FILE
mv $WORK_DIR/* $UPLOADS_DIR
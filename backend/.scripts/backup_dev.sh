#!/bin/bash
dt=$(date +%Y%m%d%H%M%S)
UPLOADS_DIR="public/uploads/"
SQLITE_FILE=".tmp/db.sqlite"
OUTPUT_ZIP=".backup/strapi_dev_${dt}.zip"

mkdir $BACKUP_DIR

zip -j -r $OUTPUT_ZIP $UPLOADS_DIR $SQLITE_FILE

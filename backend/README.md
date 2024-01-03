# Backend for personal website

A [Strapi(v3)](https://docs-v3.strapi.io/developer-docs/latest/getting-started/introduction.html) app. Provides the CMS and APIS for the frontend. 


## Prerequisits

- Requires node v15.14

## Run Strapi in Dev mode

```shell
yarn develop

# with docker
docker compose up
```


## Data

Prepopulated backend is available to [download here](https://drive.google.com/drive/folders/1dsNqqdlJA5NEeVROMTscTJZ94ld4fqKx?usp=drive_link)

### Restore

Use the [restore_dev.sh](./restore_dev.sh) script to restore a 

```shell
./restore_dev.sh "strapi_dev.zip"
```

### Backup
To backup the current db and files use: [backup_dev.sh](./backup_dev.sh), this will output a zip file into `.backup`.

```shell
./backup_dev.sh
```
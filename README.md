# danieldevine.dev

Code for my personal website and blog. 

[Strapi V3 Backend](./backend/)

[Vue V2 Frontend](./frontend/)

## Dev Mode

This will run both back and front end with hotswapping enabled. Both services
will run on their default ports. 

[Frontend: http://localhost:8080/](http://localhost:8080/)
[Backend: http://localhost:1337](http://localhost:1337)

### Run locally 

```shell
nvm use v15.14.0
./dev.sh
```

### Run with Docker Compose

```shell
docker-compose up
```

## Production

Production images are built using:

```
docker build ./backend/. --tag dd-backend:latest
docker build ./frontend/. --tag dd-frontend:lates
```

[More info on deployment](https://github.com/DanTheMinotaur/Servers-and-Stuff)

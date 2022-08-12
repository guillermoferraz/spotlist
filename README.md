#### Project creation
> Run the following commands in the main root of the project
 * `make up`
      This command will create the database, api and webapp containers. It will also close a network in docker for communication.
      You can see more details about it in the `Makefile` file and `docker-compose.yml`
    
    ###### In case of any type of error execute:
    1. `make down`
    2. `make up`
    
* You can verify the creation of the containers with the command:
 `docker ps`
* The creation of the docker network:
 `dcoker network ls`
 
 * your new network will be
```
| NEWWORK ID  | NAME         | DRIVER   |  SCOPE  |
|-------------|--------------|----------|---------|
| YOUR ID     | spotlist_net | bridge   | local   | 
```
##### With the `docker-compose up` command you can see the followers at runtime

## mongosh terminal (database)
* You can run the mongodb terminal by running the following command inside the `/api` folder
 ```
 yarn run exec:db
```
### To see the api logs you can run:
```
docker logs --follow rv-deliver-app-fullstack-api
```
### To terminate the servers run:
```
docker-compose down

```%                      

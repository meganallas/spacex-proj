# SpaceX Site for Space Newbies
A `React` website for SpaceX that contains a countdown for their upcoming launch, basic information about their rockets, and a blog space for enthusiasts.

## Technologies Used
- **MongoDB**
- **Mongoose**
- **HTML, CSS**
- **React**
- **Semantic UI**
- **Node.js**
- **GraphQL**
- **AWS** - EC2 and S3
- **[Unofficial SpaceX API Key](https://github.com/r-spacex/SpaceX-API)**

A `config.js` file is required in the server directory.  The config file should be similar to below
```
module.exports = {
    MONGODB: {mongodb cluster url here},
    SECRET_KEY: {secret key here}
};
```

In the project directory, you can run:
### `npm install`

Installs all project dependencies.

### `npm start`

The server will run on [http://localhost:5000](http://localhost:5000).

### `^c`

To stop running.
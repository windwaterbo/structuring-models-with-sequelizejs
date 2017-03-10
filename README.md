## Guideline

The repository use **ES6**. You'll need Node.js versions , **4.6+**~**7.0+** only.
It is practice for structuring models with sequelizejs.

## Quickstart

Create your project and make the structuring-model-with-squelizejs as your service of db.

It has a sample at `/example`.

```bash
~/structuring-models-with-sequelizejs/example > npm install
```

1. new a db
2. set your connection info of db at config/config.json.
3. seeders

```bash
~/structuring-models-with-sequelizejs/example > node_modules/.bin/sequelize db:seed seedToy.js
~/structuring-models-with-sequelizejs/example > node_modules/.bin/sequelize db:seed seedCat.js
~/structuring-models-with-sequelizejs/example > node_modules/.bin/sequelize db:seed seedOwner.js
~/structuring-models-with-sequelizejs/example > node_modules/.bin/sequelize db:seed seedCatInfo.js
~/structuring-models-with-sequelizejs/example > node_modules/.bin/sequelize db:seed seedCatToys.js
```

4. 

```bash
node simpleQuery.js
```



## Guideline

The repository use **ES6**. You'll need Node.js versions , **4.6+**~**7.0+** only.
It is practice for structuring models with sequelizejs.

## Quickstart

Create your project and make the structuring-model-with-squelizejs as your service of db.

Install dependencies modules, **[sequelize](http://docs.sequelizejs.com/en/v3/)**. If you have installed it, you can't do the step.

```bash
~/yourProject : npm install sequelize
```

- Setting config in your project that is db connection data. 
  - You will create a folder, **config**.
  - create a json file, **dbConfig.json**.

```bash
~/yourProject : mkdir config/dbConfig.json 
```

The setting content has specific format in **dbConfig.json**. It is a nested joson.

The One level have object key set, development, production, test, etc. It is your NODE_ENV at your process for your 
decision. You can customize it.

The two level have key set in the one level object. The key set are username, password, database, host, dialect, logging.

```json
{
  "development":{
    "username":"",
    "password":"",
    "database":"",
    "host":"",
    "dialect":"",
    "logging":"",
  },
  "production":{
    ...
  },
  ...
  ...
}
```
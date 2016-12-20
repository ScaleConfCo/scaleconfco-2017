# ScaleConfCo Website

## Install dependencies

```sh
npm install
```

## Run development server

```sh
npm start
```

## Build for production

```sh
npm run build
```

## Deploy

```sh
npm run deploy
```

## Adding content

Adding static content, like speakers information, you will need to create a new file under `content/speakers` folder, use an existing file as reference:
```
---
name: Armon Dadgar
photo: armon.png
description: Hashicorp CTO & Co-founder
twitter: https://twitter.com/armon
url: https://www.hashicorp.com/
speaker: yes
---
```

The most important data is `speaker` key, after add all data you can run `npm run deploy` to publish your changes to the website.


Built with [Phenomic](https://github.com/MoOx/phenomic)

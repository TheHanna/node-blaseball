# node-blaseball: A Node.js API library for [Blaseball](https://blaseball.com)

node-blaseball is a promise-based, simple API interface library for Blaseball, written in TypeScript.

Based on the [modern-blaseball](https://github.com/helloimowen/modern-blaseball) Python package by [helloimowen](https://github.com/helloimowen).

## Getting Started

### Installation

`$ npm i -S node-blaseball`

### Usage

```javascript
const blaseball = require("node-blaseball");

blaseball.getAllTeams().then((res) => console.log(res));
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# GourmetGuru API

GourmetGuru is an API that allows users to find restaurants within a city based on their location and desired distance. The goal is to provide a seamless experience for users looking to discover restaurants nearby.


## Setup

This section will guide you through the setup process required to get up and running with the application.


### Requirements

-   Node (Version >= 18.17.1)

-   NPM (Version >= 9.6.7)

-   NestJS (Version >= 9.0)

-   PostgreSQL (Version >= 15.0)

-   TypeScript (`npm install -g typescript`)


### Get Started

1. Clone the project repository with `git clone https://github.com/Osaroigb/gourmet-guru.git` or GitHub Desktop

2. Run `npm install` from the root directory of the project to install dependencies

3. Create a `.env` file and copy the content of `.env.example` to it

4. Customize your app port number by filling the `APP_PORT` env


### Database Setup

1. Create a new database in postgresql

2. Fill the `.env` file you created with the database credentials

3. Run `npm run start:dev` in the terminal to start the server and create the tables in the database


### Development

To start the API, use the command: `npm run start:dev`

It is important to set up environment variables for the system to function properly

**NOTE**: The solution to the `Question 1 - Algorithm` is found in the `Question1-Algorithm.js` file in the `src` directory. To run it, `cd src` then `node Question1-Algorithm.js` in the terminal.

s
### API Documentation

Explore the API endpoints and learn how to use them by referring to the [Postman Documentation](https://documenter.getpostman.com/view/23691550/2s9YyvBzxY) 

This documentation provides a detailed guide on interacting with the service, including request payloads, response formats, and usage examples.

Feel free to use the Postman documentation as a reference to understand the available endpoints and make requests to the service.


### Code Standard and Resources

- [Node.js best practices](https://github.com/goldbergyoni/nodebestpractices)


### License

Nest is [MIT licensed](LICENSE).
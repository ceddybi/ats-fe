# ATS frontend

This repo produces a microservice that is responsible for running the user-facing web app.


## Key ingredients

- **[TypeScript](https://www.typescriptlang.org/)** to ensure the highest code quality
- **[Node.js](https://nodejs.org/)** to run JavaScript on the server
- **[Next.js](https://github.com/zeit/next.js)** to bundle source files and render web pages both on the server and the client
- **[React](https://reactjs.org/)** to describe interface components
- **[Apollo GraphQL client](https://github.com/apollographql/apollo-client)** to get data from the backend
- **[Redux](https://github.com/reduxjs/redux)** for static react state
- **[Styled components](https://www.styled-components.com/)** to produce well-structured and collision-free CSS
- **[Lodash](https://lodash.com/)** to leverage common utility functions
- **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** to ensure that source files are error-free and easy to read
- **[Docker](https://www.docker.com/)** to make the production version of the microservice straightforward to deploy
- **[GitLab CI](https://about.gitlab.com/features/gitlab-ci-cd/)** to automatically check code quality and generate a new docker image on every push

## Project structure

The repository generally follows [Next.js](https://github.com/zeit/next.js) folder structure, except that the source code is stored in `src` subdirectory.
This makes it easier to search and replace text across multiple files as well as to run code quality checks.

The code is inspired by [Alexander Kachkaev](https://gitlab.com/kachkaev/website-frontend)

## Running a local copy

1.  Ensure you have the latest git, Node.js and Yarn installed on your machine

    ```bash
    git --version
    ## ≥ 2.14

    node --version
    ## ≥ 10.0

    yarn --version
    ## ≥ 1.10
    ```

1.  Clone the repo from GitLab

    ```bash
    cd PATH/TO/MISC/PROJECTS
    git clone https://gitlab.com/ceddybi/ats-fe.git
    cd ats-fe
    ```

1.  Install npm dependencies using Yarn

    ```bash
    yarn
    ```

1.  Copy `.env.dist` to `.env`. You can have a look at [`src/config.ts`](src/config.ts) for hints on what is expected.


1.  Start the server in development mode

    ```bash
    yarn dev
    ```

    Modifying any of the files will refresh the app, thanks to Next.js hot module reloading.
    To stop running the server, press `ctrl+c`.

1.  If you want to test a production copy of the microservice, build and run it like this:

    ```bash
    yarn build
    yarn start
    ```


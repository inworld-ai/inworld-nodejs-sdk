# Inworld AI Node.js SDK Testing Documentation

This document provides information on the testing procedures for the Inworld AI Node.js SDK.

## Running Tests Through GitHub Actions

1. Navigate to the **Actions** tab
2. Click **On Demand Test Run** workflow
3. Click **Run workflow**
4. Select which branch you want to run from
5. Select which test suite or test spec to run
6. Select which OS to run on
7. Click **Run workflow** to run tests
8. View results by clicking on the latest workflow run
> [!IMPORTANT]
> To run a single test, write the exact test file name ex. `e2e/connection/text.spec.ts`.
> To run all tests in a folder use an asterisk ex. `e2e/connection/*`.
> To run all tests use only an asterisk ex. `*`, `__tests__/*`, `e2e/*`

## Running Unit Tests Locally

Execute the following command to run unit tests:

```sh
yarn test:unit
```

## Running E2E Tests Locally

To run E2E tests, first rename `.envsample` file to `.env` and place in root folder.

Fill in the `INWORLD_E2E_KEY` and `INWORLD_E2E_SECRET` with your own Inworld application key and secret

Import the dotenv package by running `npm install dotenv` and importing the package on the tests you wish to run 

Execute the following command to run E2E tests:

```sh
yarn test:e2e
```

## Performing Manual Tests

If you need to use changes that have not been published to npm, you can manually link the Inworld package. Follow these steps:

1. Navigate to the `inworld-nodejs-sdk` directory:
   
```sh
~/inworld-nodejs-sdk $ yarn install && yarn build && yarn link
```

2. Next, go to your application directory (e.g., `inworld-nodejs-sdk/examples/ts/cli`) and link the `@inworld/nodejs-sdk` package:

```sh
~/inworld-nodejs-sdk/examples/ts/cli $ yarn link @inworld/nodejs-sdk
```

Manual linking is a useful approach for testing your application during development. However, it may not always work or cover all testing scenarios. For final tests, it's recommended to create a compressed gzip archive using the pack command:

```sh
~/inworld-nodejs-sdk $ yarn install && yarn build && yarn pack --filename inworld-nodejs-sdk-test.tgz
```

After creating the archive, you can add it to your application using:

```sh
~/inworld-nodejs-sdk/examples/ts/cli $ yarn add ../../inworld-nodejs-sdk-test.tgz
```

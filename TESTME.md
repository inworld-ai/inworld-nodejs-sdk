# Inworld AI Node.js SDK Testing Documentation

This document provides information on the testing procedures for the Inworld AI Node.js SDK.

## Running Unit Tests

Execute the following command to run unit tests:

```sh
yarn test
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

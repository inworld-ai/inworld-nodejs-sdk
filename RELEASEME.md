# Inworld AI Node.js SDK Release Documentation

The following details the process to create a new release. The deployment to GitHub, NPM and YarnPKG are automated and should occur up a `Release & Publish to NPM` workflow being successfully finished.

## Release latest version

1. Update the `CHANGELOG.md` file, located at the root of this project, with the list of changes, fixes and features that are included with the new release. The `CHANGELOG.md` file should be compatible with following [format](https://keepachangelog.com). I.e. it should start from `Unreleased` line.
1. Create a PR and merge all changes into `main`.
1. Once this is completed, navigate to the `Actions` page for this repository.
1. Find `Release & Publish to NPM` workflow. Run it manually. Don't forget to select [increment](https://semver.org): patch, minor or major.

## Release beta version

1. Update the `CHANGELOG.md` file, located at the root of this project, with the list of changes, fixes and features that are included with the new release. The `CHANGELOG.md` file should be compatible with following [format](https://keepachangelog.com). I.e. it should start from `Unreleased` line.
1. Create a PR.
1. Navigate to the `Actions` page for this repository.
1. Find `Release & Publish to NPM` workflow. Run it manually. Select your branch from the branches list, select `beta` increment and type version that you want to publish as beta. For example, if the latest version is `1.1.0` and then next one will be `1.2.0`, type `1.2.0-beta.x`.

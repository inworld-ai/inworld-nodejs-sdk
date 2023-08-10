# Inworld AI Node.js SDK Release Documentation

The following details the process to create a new release. The deployment to GitHub, NPM and YarnPKG are automated and should occur up a `Release & Publish to NPM` workflow being successfully finished.

1. Update the `CHANGELOG.md` file, located at the root of this project, with the list of changes, fixes and features that are included with the new release. The `CHANGELOG.md` file should be compatible with following [format](https://keepachangelog.com). I.e. it should start from `Unreleased` line.
1. Create a PR and merge all changes into `main`.
1. Once this is completed, navigate to the `Actions` page for this repository.
1. Find `Release & Publish to NPM` workflow. Run it manually. Don't forget to select [increment](https://semver.org): patch, minor or major.

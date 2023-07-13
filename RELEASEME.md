# Inworld AI Node.js SDK Release Documentation

The following details the process to create a new release. The deployment to GitHub, NPM and YarnPKG are automated and should occur up a new release being successfully built.

1. Update the version number to the new release in the `package.json` file located at the root of this project.
1. Update the `CHANGELOG.md` file, located at the root of this project, with the list of changes, fixes and features that are included with the new release. Push a commit containing changes.
1. Create a PR and merge all changes into `main`.
1. Once this is completed, navigate to the `Releases` page for this repository. 
1. Create a new release. Create a new tag where # is the new version number for this release. In the `Describe this release` textbox enter the list of changes, fixes and features contained within the new release. That should be identical to the list added previously to the `CHANGELOG.md` file.

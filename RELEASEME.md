# Inworld AI Node.js SDK Release Documentation

The following details the process to create a new release. The deployment to GitHub, NPM and YarnPKG are automated and should occur up a new release being successfully built.

1. Create a new branch named `release-#` where the # is the new version number for this release.
1. Update the version number to the new release in the `package.json` file located at the root of this project.
1. Update the `CHANGELOG.md` file, located at the root of this project, with the list of changes, fixes and features that are included with the new release.
1. Commit and push the updated files to Git. You should see a message in the CLI containing a link to create a Push Release. If not then navigate to GitHub and create one manually with the label `Release #` where the # is the new version number for this release. In the details for the new PR list the changes, fixes and features contained within the new release. That should be identical to the list added previously to the `CHANGELOG.md` file.
1. After you've created the new PR, GitHub will run automated script to determine if the PR is valid or if there are any issues. 
1. By default it will say `Review Required` and `Merge is Blocked` but if you see any other issues such as `Merge Conflict` or `Unresolved Conversations` go through and correct the issues and push a new commit with the fixes.
1. If you see `No unresolved conversations` and `All checks have passed`, request another developer with **write** access to the respository to review and approve the PR. 
1. If the developer sees anything that needs to be corrected, resolve the issue in the code and push a new commit with the fix(s).
1. Once the developer approves the PR, click on the `Squash and Merge` button to merge the PR into the main branch.
1. Once this is completed, navigate to the `Releases` page for this repository. 
1. Click on the `Draft a new release` button. Click on the `Choose a tag` drop down and enter a new tag named `v#` where # is the new version number for this release. Enter the same `v#` into the `Release title` text field.
1. In the `Describe this release` textbox enter the list of changes, fixes and features contained within the new release. That should be identical to the list added previously to the `CHANGELOG.md` file.
1. Make sure the `Set as the latest release` checkbox is checked.
1. Click on the `Publish release` button to deploy the new release.
1. If any error occurs in publishing of the release you will receive an email containing a link to review the error. 

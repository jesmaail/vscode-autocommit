# autocommit README

Autocommit will auto commit to git based on config settings (on save, every x minutes, certain workspaces/repos)

__Current only supports on save.__

---

## Features
Allows for commit and push on save of documents for any repositories specifed in the `enabledList`.

Example usecase: Using VSCode for markdown note taking with git as a store.

---

## Requirements

- VSCode git extension is enabled.

---

## Extension Settings
```json
"autocommit": {
    "mode": "OnSave", // OnTimer not yet supported
    "enabledList": [
        "your-repo-name",
        "another-repo"
    ]
    "debugMode": true //Optional incase you need to troubleshoot
}
```

----

## Known Issues

Probably a lot, still in a very much prepreprerelease state and very much only intended for my personal use.

- Some repositories aren't immediately detected in the GitAPI in VS Code, enabling `debugMode` and seeing repository count of `0` confirms this.
    - Solution: Make a manual commit and push within VSCode and restart VSCode to jumpstart it.

---
## Release Notes

### 0.0.1

Initial (pre)release of autocommit with commit and push on save.

---
---

# Development notes

## Testing locally without the debugger
>`vsce package`

>`code --install-extension autocommit-0.0.1.vsix` (subject to change)

TODO - Look into how to get debugger working again since added the git definition file

---
## TODO
- Clean up code
- Custom defined git profiles rather than default
- Add something to the lower status bar to signify if enabled.
- More customisable commit messages
- `undefined` comes up when on main branch
- Ability to enable/diable repo (gets auto added/removed from config)
- Publish via github actions
    - [How to publish an extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

--- 

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

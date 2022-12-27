# autocommit README

Autocommit will auto commit to git based on config settings (on save, every x minutes, certain workspaces/repos)

Current only supports on save.

## TODO
- Clean up README
    - Move some notes from here and the getting-started branch to note repo
- Clean up code
- Replace git.ts with the provided interface from vscode git extension
    - https://github.com/microsoft/vscode/blob/main/extensions/git/src/api/git.d.ts
- Add something to the lower status bar to signify if enabled.

## Resources
- [How to publish an extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

## Testing locally without the debugger
>`vsce package`
>`code --install-extension autocommit-0.0.1.vsix` (subject to change)

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

## Requirements

- N/A

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Test release of autocommit


---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

# Boilerplate code that comes preloaded
```typescript
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "autocommit" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('autocommit.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from autocommit!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

```
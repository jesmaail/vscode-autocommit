import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    console.log('Debug message');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('autocommit.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from autocommit!');
    });

    let test = vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
        let currentRepo = vscode.workspace.name;
        vscode.window.showInformationMessage(`Current workspace: ${currentRepo}`);
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }

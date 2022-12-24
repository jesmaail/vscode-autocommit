import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let currentRepo = vscode.workspace.name;

    // TODO - if in Devcontainer there'll be some exta crap that needs trimming.
    let enabledRepoList = [
        undefined, // How it currently turns up in the debug view
        "vscode-autocommit",
        "beacon"
    ];

    let isEnabled = enabledRepoList.some(repo => repo === currentRepo);

    if (isEnabled) {
        vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
            vscode.window.showInformationMessage(`Current workspace: ${currentRepo}`);
        });
    }
}

// This method is called when your extension is deactivated
export function deactivate() { }

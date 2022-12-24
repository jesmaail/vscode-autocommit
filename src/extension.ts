import * as vscode from 'vscode';
import { debugPrint } from './utils';

export function activate(context: vscode.ExtensionContext) {
    let currentRepoRaw = vscode.workspace.name;

    // Trims any extra text from Remote Dev Container
    let currentRepo = currentRepoRaw?.split('[')[0].trim();

    let enabledRepoList = [
        undefined, // How it currently turns up in the debug view
        "vscode-autocommit",
        "beacon"
    ];

    let isEnabled = enabledRepoList.some(repo => repo === currentRepo);

    debugPrint(`isEnabled: ${isEnabled}`);

    if (isEnabled) {
        vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
            debugPrint(`Current workspace: ${currentRepo}`);
        });
    }
}

// This method is called when your extension is deactivated
export function deactivate() { }

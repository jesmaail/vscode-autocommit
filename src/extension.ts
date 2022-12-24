import * as vscode from 'vscode';
import { debugPrint, getWorkspaceName } from './utils';

export function activate(context: vscode.ExtensionContext) {
    let currentRepo = getWorkspaceName();

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

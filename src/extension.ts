import * as vscode from 'vscode';
import configuration from './configuration';
import { debugPrint, getWorkspaceName } from './utils';

export function activate(context: vscode.ExtensionContext) {
    let config = configuration;
    let currentRepo = getWorkspaceName();

    if (config.mode === "OnTimer") {
        vscode.window.showErrorMessage("autocommit: OnTimer mode not yet supported, defaulting to OnSave.");
    }

    let isEnabled = config.enabledList.some(repo => repo === currentRepo);

    debugPrint(`isEnabled: ${isEnabled}`);

    if (isEnabled) {
        vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
            debugPrint(`Current workspace: ${currentRepo}`);
        });
    }
}

// This method is called when your extension is deactivated
export function deactivate() { }

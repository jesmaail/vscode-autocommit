import * as vscode from 'vscode';

export function debugPrint(message: string) {
    vscode.window.showInformationMessage(message)
}

export function getWorkspaceName() {
    // Trims any extra text from Remote Dev Container
    return vscode.workspace.name?.split('[')[0].trim();
}
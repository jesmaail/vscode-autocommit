import * as vscode from 'vscode';

export function debugPrint(message: string) {
    vscode.window.showInformationMessage(message)
}

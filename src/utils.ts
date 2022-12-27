import * as vscode from 'vscode';
import configuration from './configuration';

export function printToDebug(message: string) {
    if (!configuration.debugMode) {
        return;
    }

    vscode.window.showInformationMessage(`DEBUG: ${message}`);
}
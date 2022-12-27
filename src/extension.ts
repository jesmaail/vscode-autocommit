import * as vscode from 'vscode';
import configuration from './configuration';
import { getGitApi } from "./git";
import { debugPrint, getGitRepoName } from './utils';

export async function activate(context: vscode.ExtensionContext) {
    const git = await getGitApi();

    if (!git) {
        return; // Something wrong with the git extension
    }

    if (git.repositories.length === 0) {
        debugPrint("autocommit: Current workspace is not a git repository.");
        return;
    }

    let repository = git.repositories[0];

    let config = configuration;
    let currentRepo = getGitRepoName(repository);

    if (config.mode === "OnTimer") {
        vscode.window.showErrorMessage("autocommit: OnTimer mode not yet supported, defaulting to OnSave.");
    }

    let isEnabled = config.enabledList.some(repo => repo === currentRepo);

    debugPrint(`isEnabled: ${isEnabled}`);

    if (isEnabled) {
        vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
            repository.add([document.fileName]); // Only want to add the current file (OnSave Mode)
            repository.commit("Adding automated commit and testing it");
            repository.push();
        });
    }
}

export function deactivate() { }

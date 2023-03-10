import path = require('path');
import * as vscode from 'vscode';
import { Repository } from '../typings/git';

export async function getGitApi() {
    let gitExtension = vscode.extensions.getExtension("vscode.git");

    if (!gitExtension) {
        return;
    }

    if (!gitExtension.isActive) {
        await gitExtension.activate();
    }

    return gitExtension.exports.getAPI(1);
}

export function getGitRepoName(repository: Repository) {
    let repoPath = vscode.Uri.parse(repository.rootUri.fsPath).fsPath;
    return path.basename(repoPath);
}

export async function commitFile(document: vscode.TextDocument, repository: Repository, message: string) {
    await repository.add([document.fileName]); // Only want to add the current file (OnSave Mode)
    await repository.commit(message);

    vscode.window.showInformationMessage("autocommit: Committed.");
}

export async function pushToGit(repository: Repository, currentBranch: string | undefined) {
    await repository.push("origin", currentBranch);

    vscode.window.showInformationMessage(`autocommit: Pushed to ${currentBranch}.`);
}

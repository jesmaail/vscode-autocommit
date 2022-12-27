import path = require('path');
import * as vscode from 'vscode';
import { Repository } from "./git";

export function debugPrint(message: string) {
    vscode.window.showInformationMessage(message)
}

export function getGitRepoName(repository: Repository) {
    let repoPath = vscode.Uri.parse(repository.rootUri).fsPath;

    // Get the name of the repository
    let name = path.basename(repoPath);
    debugPrint(`repo name is ${name}`);

    return name;
}

export async function addCommitPushFile(document: vscode.TextDocument, repository: Repository, currentBranch: string | undefined) {
    await repository.add([document.fileName]); // Only want to add the current file (OnSave Mode)
    await repository.commit("Adding automated commit and testing it now with working push");
    await repository.push("origin", currentBranch);
}

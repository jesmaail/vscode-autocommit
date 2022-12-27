import path = require('path');
import * as vscode from 'vscode';
import { GitAPI } from "./git";

export function debugPrint(message: string) {
    vscode.window.showInformationMessage(message)
}

export function getGitRepoName(gitApi: GitAPI) {
    let repository = gitApi.repositories[0];
    let repoPath = vscode.Uri.parse(repository.rootUri).fsPath;

    // Get the name of the repository
    let name = path.basename(repoPath);
    debugPrint(`repo name is ${name}`);

    return name;
}
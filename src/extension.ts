import * as vscode from 'vscode';
import configuration from './configuration';
import { getGitApi, getGitRepoName, commitFile, pushToGit } from './gitUtils';

export async function activate(context: vscode.ExtensionContext) {
    const git = await getGitApi();

    if (!git) {
        return; // Something wrong with the git extension
    }

    if (git.repositories.length === 0) {
        vscode.window.showErrorMessage("autocommit: Current workspace is not a git repository.");
        return;
    }

    let repository = git.repositories[0];

    let currentRepo = getGitRepoName(repository);

    let currentBranch = repository.state.HEAD?.name;

    if (configuration.mode === "OnTimer") {
        vscode.window.showErrorMessage("autocommit: OnTimer mode not yet supported, defaulting to OnSave.");
    }

    let isEnabled = configuration.enabledList.some(repo => repo === currentRepo);

    // TODO - Check how this works with workspace changes, multiple windows, etc.
    // - Could do another init-like check for enabled on a onDidChangeWorkspace(?) event.

    if (isEnabled) {
        vscode.workspace.onDidSaveTextDocument(async (document: vscode.TextDocument) => {
            await commitFile(document, repository, configuration.commitMessage);
            await pushToGit(repository, currentBranch);
        });
    }
}

export function deactivate() { }

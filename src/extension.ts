import * as vscode from 'vscode';
import configuration from './configuration';
import { getGitApi, getGitRepoName, commitFile, pushToGit } from './gitUtils';
import { printToDebug } from './utils';

export async function activate(context: vscode.ExtensionContext) {
    const git = await getGitApi();

    if (!git) {
        return; // Something wrong with the git extension
    }

    if (git.repositories.length === 0) {
        vscode.window.showErrorMessage("autocommit: Current workspace is not a git repository.");
        printToDebug(`Repositories length: ${git.repositories.length}`);
        return;
    }

    let repository = git.repositories[0];

    let currentRepo = getGitRepoName(repository);
    printToDebug(`Current Repo: ${currentRepo}`);

    let currentBranch = repository.state.HEAD?.name;
    printToDebug(`Current Branch: ${currentBranch}`);

    if (configuration.mode === "OnTimer") {
        vscode.window.showErrorMessage("autocommit: OnTimer mode not yet supported, defaulting to OnSave.");
    }

    let isEnabled = configuration.enabledList.some(repo => repo === currentRepo);
    printToDebug(`Enabled: ${isEnabled}`);

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

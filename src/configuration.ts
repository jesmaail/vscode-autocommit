import * as vscode from "vscode";

export type Mode = "OnSave" | "OnTimer";

const DEFAULT_COMMIT_MESSAGE = "autocommit: Commit on save";

function configuration() {
    return vscode.workspace.getConfiguration("autocommit");
}

export default {
    get enabledList(): Array<string> {
        return configuration().get("enabledList", []);
    },

    get mode(): Mode {
        return configuration().get("mode", "OnSave");
    },

    get commitMessage(): string {
        return configuration().get("commitMessage", DEFAULT_COMMIT_MESSAGE);
    }
};

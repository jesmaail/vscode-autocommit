import * as vscode from "vscode";

export type Mode = "OnSave" | "OnTimer";

function configuration() {
    return vscode.workspace.getConfiguration("autocommit");
}

export default {
    get enabledList(): Array<string> {
        return configuration().get("enabledList", []);
    },

    get mode(): Mode {
        return configuration().get("mode", "OnSave");
    }
};

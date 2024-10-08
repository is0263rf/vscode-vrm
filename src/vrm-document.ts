import * as vscode from "vscode";
import { disposeAll, Disposable } from "./dispose";

export class VRMDocument extends Disposable implements vscode.CustomDocument {
  private readonly _uri: vscode.Uri;

  constructor(uri: vscode.Uri) {
    super();
    this._uri = uri;
  }

  public get uri(): vscode.Uri {
    return this._uri;
  }

  public dispose() {
    super.dispose();
  }
}

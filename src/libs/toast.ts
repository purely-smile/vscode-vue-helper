import * as vscode from 'vscode';

export default {
  success(str: string) {
    vscode.window.showInformationMessage(str);
  },
  waring(str: string) {
    vscode.window.showWarningMessage(str);
  },
  error(str: string) {
    vscode.window.showErrorMessage(str);
  }
}

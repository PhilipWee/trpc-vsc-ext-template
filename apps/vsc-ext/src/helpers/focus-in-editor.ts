import * as vscode from 'vscode'
import { latestActiveEditor } from '../main';

export const focusInEditor = async (
  filePath: string,
  lineNumber: number | undefined
) => {
  let editor = latestActiveEditor;

  if (!editor || editor.document.fileName !== filePath) {
    const document = await vscode.workspace.openTextDocument(filePath);
    editor = await vscode.window.showTextDocument(document, editor?.viewColumn);
  }

  const position = new vscode.Position(lineNumber ?? 0, 0);
  const range = new vscode.Range(position, position);
  editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
  editor.selection = new vscode.Selection(position, position);
};
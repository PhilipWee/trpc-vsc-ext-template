import { observable } from '@trpc/server/observable';
import * as vscode from 'vscode';
import { ee } from '../event-emitter';
import { latestActiveEditor } from '../main';
import { publicProcedure, router } from '../trpc';

export const fileRouter = router({
  onSelectionChange: publicProcedure.subscription(() => {
    return observable<NonNullable<ReturnType<typeof getSelectionData>>>(
      (emit) => {
        const sendSelectionData = () => {
          const selectionData = getSelectionData(latestActiveEditor);
          if (!selectionData) return;
          emit.next(selectionData);
        };

        sendSelectionData();

        ee.on('mainKeyboardShortcutPressed', sendSelectionData);

        return () => {
          ee.removeListener('mainKeyboardShortcutPressed', sendSelectionData);
        };
      }
    );
  }),
});

const getSelectionData = (editor: vscode.TextEditor | undefined) => {
  if (!editor) return undefined;

  const selectedText = editor.document.getText(editor.selection);
  const fullFileContents = editor.document.getText();
  const allLines = fullFileContents.split('\n');

  // Expand selection
  const startLine = editor.selection.start.line;
  const endLine = editor.selection.end.line;

  editor.selection = new vscode.Selection(
    new vscode.Position(startLine, 0),
    new vscode.Position(endLine, allLines[endLine].length)
  );

  const selectedLineNumbers = {
    start: startLine + 1,
    end: endLine + 1,
  };

  return {
    fullFileContents,
    selectedLineNumbers,
    selectedText,
  };
};

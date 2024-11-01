import '@vsc-trpc-template/shared-types';
import fuzzysort from 'fuzzysort';
import * as vscode from 'vscode';
import html from '../../../dist/apps/vsc-trpc-template/static/index.html?raw';
import { createVscExtHandler } from './adapter/createVscExtHandler';
import { ee } from './event-emitter';
import { fileRouter } from './routers/files';
import { publicProcedure, router } from './trpc';
import { getBestColForWebView } from './helpers/get-best-col';

const logger = console;
export let latestActiveEditor = vscode.window.activeTextEditor;
let currentWebview: vscode.WebviewPanel | undefined = undefined;

export function getCurWebView() {
  return currentWebview;
}

export const appRouter = router({
  files: fileRouter,
  hello: publicProcedure.query(() => {
    return {
      message: 'Hello, world!',
    };
  }),
});

export function activate(context: vscode.ExtensionContext) {
  vscode.window.onDidChangeActiveTextEditor((editor) => {
    if (!editor) return;
    latestActiveEditor = editor;
  });

  // Register the command
  const disposable = vscode.commands.registerCommand('vsc-trpc-template.init', () => {
    const bestCol = getBestColForWebView();

    if (currentWebview) {
      currentWebview.reveal(bestCol);
      return ee.emit('mainKeyboardShortcutPressed');
    }

    // Create and show a new webview
    currentWebview = vscode.window.createWebviewPanel(
      'vsc-trpc-template', // Identifies the type of the webview. Used internally
      'vsc-trpc-template', // Title of the panel displayed to the user
      bestCol, // Editor column to show the new webview panel in.
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      } // Webview options. More on these later.
    );

    createVscExtHandler({ panel: currentWebview, context, router: appRouter });
    currentWebview.webview.html = getWebViewContent();
    currentWebview.onDidDispose(
      () => {
        currentWebview = undefined;
      },
      null,
      context.subscriptions
    );
    return;
  });

  // Push the command to the subscriptions
  context.subscriptions.push(disposable);
}

function getWebViewContent(): string {
  return html;
}

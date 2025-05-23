import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const provider = vscode.languages.registerCompletionItemProvider(
        { scheme: 'file', language: 'plaintext' },
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                const keywords = [
                    'helloWorld',
                    'autoComplete',
                    'vscodeExtension',
                    'myFunction',
                    'sampleText'
                ];

                return keywords.map((keyword) => {
                    const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
                    item.detail = 'Custom Keyword';
                    item.documentation = new vscode.MarkdownString(`Inserts **${keyword}**`);
                    return item;
                });
            }
        },
        '' // trigger on every character
    );

    context.subscriptions.push(provider);
}

export function deactivate() {}

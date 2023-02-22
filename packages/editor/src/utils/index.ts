import type { MonacoEditor } from "../types";

export function defaultSlotHelper(defaultSlots: any) {
  return typeof defaultSlots == "function" ? defaultSlots() : defaultSlots;
}

export function isUndefined(v: unknown) {
  return v === undefined;
}

export function getOrCreateModel(
  monaco: MonacoEditor,
  value: string,
  language?: string,
  path?: string,
) {
  return getModel(monaco, path!) || createModel(monaco, value, language, path);
}

function getModel(monaco: MonacoEditor, path: string) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}

function createModel(
  monaco: MonacoEditor,
  value: string,
  language?: string,
  path?: string,
) {
  return monaco.editor.createModel(
    value,
    language,
    path ? createModelUri(monaco, path) : undefined,
  );
}

function createModelUri(monaco: MonacoEditor, path: string) {
  return monaco.Uri.parse(path);
}

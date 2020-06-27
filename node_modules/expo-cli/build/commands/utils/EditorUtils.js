"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guessEditor = guessEditor;
exports.startProjectInEditorAsync = startProjectInEditorAsync;

function _spawnAsync() {
  const data = _interopRequireDefault(require("@expo/spawn-async"));

  _spawnAsync = function () {
    return data;
  };

  return data;
}

function _xdl() {
  const data = require("@expo/xdl");

  _xdl = function () {
    return data;
  };

  return data;
}

function _envEditor() {
  const data = _interopRequireDefault(require("env-editor"));

  _envEditor = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require("../../log"));

  _log = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function guessEditor() {
  if (process.env.EXPO_EDITOR) {
    return _envEditor().default.getEditor(process.env.EXPO_EDITOR);
  }

  try {
    return _envEditor().default.defaultEditor();
  } catch (_unused) {
    return _envEditor().default.getEditor('vscode');
  }
}

async function startProjectInEditorAsync(path, options = {}) {
  try {
    return await _xdl().FileSystem.openProjectInEditorAsync(path);
  } catch (_unused2) {}

  const editor = options.editor ? _envEditor().default.getEditor(options.editor) : guessEditor();

  if (!editor) {
    _log().default.error('Could not find your editor, you can set it by defining $EXPO_EDITOR environment variable (e.g. "code" or "atom")');

    return;
  }

  const stdio = editor.isTerminalEditor ? 'inherit' : 'ignore';
  const editorProcess = (0, _spawnAsync().default)(editor.binary, [path], {
    stdio,
    detached: true
  });
  editorProcess.child.unref();
  return editorProcess;
}
//# sourceMappingURL=EditorUtils.js.map
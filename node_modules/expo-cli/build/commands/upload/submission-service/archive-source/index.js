"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArchiveAsync = getArchiveAsync;
Object.defineProperty(exports, "ArchiveFileSource", {
  enumerable: true,
  get: function () {
    return _ArchiveFileSource().ArchiveFileSource;
  }
});
Object.defineProperty(exports, "ArchiveFileSourceType", {
  enumerable: true,
  get: function () {
    return _ArchiveFileSource().ArchiveFileSourceType;
  }
});
Object.defineProperty(exports, "ArchiveTypeSource", {
  enumerable: true,
  get: function () {
    return _ArchiveTypeSource().ArchiveTypeSource;
  }
});
Object.defineProperty(exports, "ArchiveTypeSourceType", {
  enumerable: true,
  get: function () {
    return _ArchiveTypeSource().ArchiveTypeSourceType;
  }
});

function _ArchiveFileSource() {
  const data = require("./ArchiveFileSource");

  _ArchiveFileSource = function () {
    return data;
  };

  return data;
}

function _ArchiveTypeSource() {
  const data = require("./ArchiveTypeSource");

  _ArchiveTypeSource = function () {
    return data;
  };

  return data;
}

async function getArchiveAsync(mode, source) {
  const location = await (0, _ArchiveFileSource().getArchiveFileLocationAsync)(mode, source.archiveFile);
  const type = await (0, _ArchiveTypeSource().getArchiveTypeAsync)(source.archiveType, location);
  return {
    location,
    type
  };
}
//# sourceMappingURL=index.js.map
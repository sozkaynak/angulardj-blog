module.exports = {
  name: "angulardj",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/angulardj/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};

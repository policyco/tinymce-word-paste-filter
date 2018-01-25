const WordFilter = require('./WordFilter.js');
const Styles = require('./Styles.js');

StylesTool = Styles();

/*
    create a mock editor object, expected by plugin;
    must include Styles de/serializers
*/
const editor = {
    settings: {},
    dom: {
        parseStyle: StylesTool.parse,
        serializeStyle: StylesTool.serialize,
    }
};

/*
    also mock the param function required by editor
*/
editor.getParam = function (key, defaultValue) { return defaultValue; }

module.exports = function CleanWordHTML (content) {
    if (!WordFilter.isWordContent(content)) {
        return content;
    }

    return WordFilter.preProcess(editor, content);
}

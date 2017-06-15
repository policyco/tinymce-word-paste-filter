const WF = require('./WordFilter.js');
const WordFilter = WF.WordFilter;
const Styles = WF.Styles;

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
    allow filter to be attached to editor object, 
    by mocking the 'on' binding
*/
editor.on = function (name, func) { this[name] = func };
WordFilter(editor);

module.exports = function CleanWordHTML (content) {
    const container = {content: content};
    editor.BeforePastePreProcess(container);
    return container.content;
}

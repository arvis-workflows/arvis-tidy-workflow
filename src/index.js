const arvish = require('arvish');

const languages = [{
  title: 'json',
  arg: 'json',
}, {
  title: 'xml',
  arg: 'xml',
}]

const output = arvish.inputMatches(languages, 'title');
arvish.output(output);


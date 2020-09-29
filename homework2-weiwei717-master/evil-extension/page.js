const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.

	if(node.nodeType == Node.TEXT_NODE) {
		const onlySpace = node.textContent.trim();
		if(onlySpace !== "") {
			//console.log('origin='+node.textContent);
			var words = node.textContent.split(/[\s\n]/);
			//console.log('start');
			//console.log(words);
			var n = words.length;
			for(var i=0; i<n; i++) {
				if(MATCH_LIST[words[i]] !== undefined) {
					console.log(words[i]+' change to '+MATCH_LIST[words[i]]);
					words[i] = MATCH_LIST[words[i]];
				}
				words[i] = words[i]+' ';
				//console.log(words);
			}
			//console.log('end');
			node.textContent = words.join('');
			//console.log('new='+node.textContent);
		}
	}

	for(const child of node.childNodes) {
		transformTextNodes(child);
	}
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');
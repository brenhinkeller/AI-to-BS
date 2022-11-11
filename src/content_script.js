walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\ban AI\b/g, "a BS");
	v = v.replace(/\bAI\b/g, "BS");
	
	v = v.replace(/\ban [Aa]rtificial [Ii]ntelligence/g, "some BS That Doesn't Exist Yet");
	v = v.replace(/\bAn [Aa]rtificial [Ii]ntelligence/g, "Some BS That Doesn't Exist Yet");	
	v = v.replace(/[Aa]rtificial [Ii]ntelligence/g, "BS That Doesn't Exist Yet");
	
	v = v.replace(/\bML\b/g, "IF");
	
	v = v.replace(/\ba [Mm]achine [Ll]earning\b/g, "an IF Statements");
	v = v.replace(/\b[Mm]achine [Ll]earning\b/g, "IF Statements");

	v = v.replace(/\[Dd]eep [Ll]earning\b/g, "Linear Algebra");

	textNode.nodeValue = v;
}

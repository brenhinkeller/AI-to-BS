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

	v = v.replace(/\bAI\b/g, "BS");
	v = v.replace(/Artificial Intelligence/g, "BS That Doesn't Exist Yet");
	v = v.replace(/Artificial intelligence/g, "BS That Doesn't Exist Yet");
	v = v.replace(/artificial Intelligence/g, "BS That Doesn't Exist Yet");
	v = v.replace(/artificial intelligence/g, "BS That Doesn't Exist Yet");

	v = v.replace(/\bML\b/g, "IF");
	v = v.replace(/\bMachine Learning\b/g, "IF Statements");
	v = v.replace(/\bMachine learning\b/g, "IF Statements");
	v = v.replace(/\bmachine learning\b/g, "IF Statements");

	v = v.replace(/\Deep Learning\b/g, "Linear Algebra");
	v = v.replace(/\Deep learning\b/g, "Linear Algebra");
	v = v.replace(/\deep learning\b/g, "Linear Algebra");

	textNode.nodeValue = v;
}

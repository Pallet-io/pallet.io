## Coding Style
### All
* Put ONLY a blank line at the end of every file.

### HTML
* Put `<!DOCTYPE html>` at the beginning.
* `<html>`, `<head>`, `<body>` are not indented.
* Any child element is indented one TAB more than the parent element, except for ones that are short or are the only child.
* There is a blank line between main sections.
* **DO NOT PUT STYLES IN HTML**, except for efficiency or loading time consideration.

### CSS
* There is a blank line after every selector.
* Spaces after colons.
* Use **SINGLE QUOTATION MARKS** with strings.
* Colors are represented in 6-digit hex (`#XXXXXX`), or, if transparent, `rgba(r,g,b,a)`.
* Styles are indented with 1 TAB.
* Styles with multiple long values seperated with commas, eg. transition, transform, etc., might have line breaks, and if they are similar in some part, use spaces to align.
* Selectors are grouped. A commented string indicating the group name is added before the first selector of that group.
* The notation of commented styles comes before the TAB character and after the semicolon.
* There must be a space between the commented strings and the star signs, except for commented styles.
* Long selectors can have line breaks after comma, and if they are similar in some part, use spaces to align if posiible.

### JavaScript
* **NO SEMICOLONS.**
* Use **SINGLE QUOTATION MARKS** with strings.
* Spaces are added around assigning operator, eg. `=`, `+=`, etc.
* Use `function(){}` instead of `()=>{}` for the cross-browser issue with ES6.
* Long argument lists and arrays can have line breaks after commas.
* If multiple sequential lines are similar in some part, use spaces to align if possible.
* There is a blank line between every sections.
* If Code inside a curly brackets is short, it can be merged to the same line, or else a line break is inserted before and after it, and it is indented one TAB more than the outer brackets.

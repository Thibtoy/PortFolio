export default class RenderButton {
	constructor(linkedElement, parent) {
		this.linkedElement = linkedElement;
		this.parent = parent

		this.refreshLinkedElement = this.refreshLinkedElement.bind(this);
	}

	render() {
		let element = document.createElement('button');
		element.addEventListener('click', this.refreshLinkedElement);
		this.parent.appendChild(element);
	}

	refreshLinkedElement() {
		this.linkedElement.setState({currentPage: 'Home', backgroundColor: 'lightblue'});
	}
}
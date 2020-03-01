import Component from './Component.js';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 'test',
			backgroundColor: 'purple'
		};
		this.element = document.createElement('div');
		this.render();
	}

	render() { 
		this.element.id = 'Header';
		this.element.style.width = '100vw';
		this.element.style.height = '60px';
		this.element.style.display = 'flex';
		this.element.style.alignItems = 'center';
		this.element.style.justifyContent = 'center';
		this.element.style.backgroundColor = this.state.backgroundColor;
		this.element.innerHTML = this.state.currentPage;
	}
}
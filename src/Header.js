import Component from './Component.js';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: this.routerCallback(),
			backgroundColor: 'purple'
		};
		this.element = document.createElement('div');
		this.routerCallback = this.routerCallback.bind(this);
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

	routerCallback(event) {
		let currentWay = window.location.pathname.split('/');
		let pathname = (!currentWay[1])? 'Home' : currentWay[1][0].toUpperCase()+currentWay[1].substring(1);
		if (event) this.setState('currentPage', pathname);
		else return pathname;
	}
}
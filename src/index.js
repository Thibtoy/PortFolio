import Header from './Header.js';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';
import Router from './Router.js';

class App {
	constructor() {
		this.node = document.getElementById('app');
		this.router = new Router(this);
		this.pages = [
			{
				name: 'Home', 
				path: '/', 
				content: new LoginForm(),
			},
			{
				name: 'Register',
				path: '/register',
				content: new RegisterForm(),
			}
		];

		this.render = this.render.bind(this);
		this.ancre = document.createElement('a');
		this.ancre.innerHTML = 'register';
		this.ancre.id = 'register';
		this.router.link(this.ancre);
		this.treeBuilder = {
			header: new Header(),
			page: document.createElement('div'),
		};

		this.render();
	}

	render() {
		this.copyNode = document.createElement('div');
		this.treeBuilder = {
			header: new Header(),
			page: this.buildPageContent()
		};
		for (let node in this.treeBuilder) {
			let element = this.treeBuilder[node].append()
			//this.node.appendChild(element);
			this.copyNode.appendChild(element);
			//console.log(this.copyNode);
		}
		//this.refreshDOM();
		this.copyNode.appendChild(this.ancre);
		this.readDOM();
	}

	buildPageContent() {
		let path = window.location.pathname;
		let page = this.pages.find(page => page.path === path);
		this.currentPage = page;
		return page.content;
	}

	// refreshDOM() {
	// 	let DOM = document.cloneNode(true);
	// 	console.log(DOM.body.getElementsByTagName('form')[0]);
	// }

	readDOM() {
		let DOM = this.node;
		let copyDOM = this.copyNode;
		handleChanges(copyDOM, DOM);
		// for (let i = 0, l = DOM.length; i < l; i++) {
		// 	console.log(DOM[i].children.length);
		// }
	}
}

const app = new App();

function handleChanges(copyNode, node) {
	let copyDOMtoArray = new Array();
	for (let i = 0, l = copyNode.children.length; i < l; i++) copyDOMtoArray[i] = copyNode.children[i];
	for(let i = 0, l = copyDOMtoArray.length; i < l; i++) {
		if (!node.children[i]) {
			node.appendChild(copyDOMtoArray[i]);
		}
		else if (copyDOMtoArray[i].getAttribute('key') != node.children[i].getAttribute('key')) { 
			node.replaceChild(copyDOMtoArray[i], node.children[i]);
		}
		else 
			handleChanges(copyNode.children[i], node.children[i]);
	}
}
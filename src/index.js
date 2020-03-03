import Header from './Header.js';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';
import Yggdrasil from './Yggdrasil.js';

class App extends Yggdrasil{
	constructor() {
		super();
		this.ancre = {element: document.createElement('div'), append: function() {
			this.element.setAttribute('key', Date.now());
			return this.element;
		}};
		this.ancre.element.id = 'register';
		this.ancre.element.innerHTML = 'register';
		this.router.link(this.ancre.element);
	}
}

const app = new App();
app.use({
			header: new Header(),
			pages: [
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
			],
			ancre: app.ancre,
		});
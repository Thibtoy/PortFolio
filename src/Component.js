export default class Component {
	setState() {
		let state;
		try {
			if (arguments.length === 1 && typeof arguments[0] === 'object' && !arguments[0].length) 
				state = arguments[0];

			else if (!state && arguments.length === 2 && typeof arguments[0] === 'string' && typeof arguments[1] === 'string')
				state = {[arguments[0]]: arguments[1]};

			else throw new TypeError(`you're trying to pass invalid arguments to this method, refer to the documentation to see how to use it`);
			
			if (state){
				this.state = {...this.state, ...state};
				this.element.setAttribute('key', Date.now());
			} 
			this.render();
		}
		catch (e) {
			console.error(e);
		}
	}

	append() {
		this.element.setAttribute('key', Date.now());
		return this.element;
	}
}
import React, {Component} from 'React';

import Logo from './heart.svg';

class About extends Component{
	render(){
		return(
			<div>
				<h1>About Component<h1>
				<img src={Logo} width="500" alt="logo" />
			<div>
		)
	}
}

export default About;
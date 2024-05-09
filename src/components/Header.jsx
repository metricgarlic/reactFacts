/** @format */
import reactLogo from "../assets/react_logo.png";

function Header() {
	return (
		<nav className="navBar">
			<img className='logo' src={reactLogo}></img>
			<h3>ReactFacts</h3>
			<h4 className="course">React Course - Project 1</h4>
		</nav>
	);
}

export default Header;

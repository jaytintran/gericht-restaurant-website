import "./Navbar.css"
import { AiOutlineMenu } from "react-icons/ai"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import images from "../../constants/images"
import { useState } from "react"

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<div className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.gericht} alt="app logo" />
			</div>

			<ul className="app__navbar-links">
				<li className="p__opensans">
					<a href="#home">Home</a>
				</li>
				<li className="p__opensans">
					<a href="#about">About</a>
				</li>
				<li className="p__opensans">
					<a href="#menu">Menu</a>
				</li>
				<li className="p__opensans">
					<a href="#awards">Awards</a>
				</li>
				<li className="p__opensans">
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="app__navbar-login">
				<a href="#login" className="p__opensans">
					Log-in / Register
				</a>
				<div></div>
				<a href="/" className="p__opensans">
					Book Table
				</a>
			</div>

			<div className="app__navbar-mobile">
				<AiOutlineMenu
					color="#fff"
					fontSize={27}
					onClick={() => setToggle(true)}
				/>

				{toggle && (
					<div className="app__navbar-mobile_overlay flex__center slide-bottom">
						<MdOutlineRestaurantMenu
							fontSize={27}
							className="overlay__close"
							onClick={() => setToggle(false)}
						/>

						<ul className="app__navbar-mobile-links">
							<li className="p__opensans">
								<a href="#home">Home</a>
							</li>
							<li className="p__opensans">
								<a href="#about">About</a>
							</li>
							<li className="p__opensans">
								<a href="#menu">Menu</a>
							</li>
							<li className="p__opensans">
								<a href="#awards">Awards</a>
							</li>
							<li className="p__opensans">
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar

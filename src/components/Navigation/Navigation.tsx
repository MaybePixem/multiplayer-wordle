import { useEffect, useState } from "react";
import classNames from "classnames";
import "./Navigation.css";

function Navigation() {
	const [activeNavigation, setActiveNavigation] = useState();

	const handleNavOnClick = (event) => {
		setActiveNavigation(event.target.id);
	};

	useEffect(() => {}, []);

	return (
		<header id="header" className="fixed-top ">
			<div className="container d-flex align-items-center justify-content-lg-between">
				<h1 className="logo me-auto me-lg-0">
					<a href="/">
						Multiplayer Wordle<span>.</span>
					</a>
				</h1>

				<nav id="navbar" className="navbar order-last order-lg-0">
					<ul>
						<li>
							<a
								id="navHome"
								className={classNames({ "nav-link": true, scrollto: true, active: activeNavigation === "navHome" })}
								onClick={handleNavOnClick}
								href="/"
							>
								Home
							</a>
						</li>
						<li>
							<a
								id="navProfile"
								className={classNames({ "nav-link": true, scrollto: true, active: activeNavigation === "navProfile" })}
								onClick={handleNavOnClick}
								href="/profile"
							>
								Profile
							</a>
						</li>
					</ul>
				</nav>
				<button className="connect-btn scrollto">Test</button>
			</div>
		</header>
	);
}

export default Navigation;

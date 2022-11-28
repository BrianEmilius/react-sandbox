import { Link, Outlet } from "react-router-dom"

export default function Layout() {
	return (
		<div>
			<header>
				<nav>
					<menu>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/other-page">Other Page</Link>
						</li>
					</menu>
				</nav>
			</header>
			<main>
				<Outlet/>
			</main>
		</div>
	)
}

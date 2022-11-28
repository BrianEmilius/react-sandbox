import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Layout from "./Layout"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route default path="/" element={<Home />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
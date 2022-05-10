import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import "./App.css";
import Solo from "./gamemodes/Solo";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Router>
				<Routes>
					<Route path="/" element={<Solo />}></Route>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;

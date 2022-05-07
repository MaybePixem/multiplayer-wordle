import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import Lobby from "./Lobby/Lobby";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Router>
				<Routes>
					<Route path="/" element={<Lobby />}></Route>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;

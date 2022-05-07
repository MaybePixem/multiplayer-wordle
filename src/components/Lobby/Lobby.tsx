import "./Lobby.css";

function Lobby() {
	return (
		<section id="home" className="d-flex align-items-center justify-content-center">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
						<h1>
							Worlde<span>.</span>
						</h1>
						<h2>Yes, Wordle</h2>
					</div>
				</div>
				<div className="row gy-4 mt-5 justify-content-center">No seriously, Wordle</div>
			</div>
		</section>
	);
}

export default Lobby;

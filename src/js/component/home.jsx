import React, { useState } from "react";
import '../../styles/home.css';


//create your first component
const TrafficLight = () => {
	const [selectedLight, setSelectedLight] = useState("");

	//función para seleccionar aleatoriamente una luz
	const changeSelectedLight = () => {
		const lights = ["red", "yellow", "green"];
		const randomLight = lights[Math.floor(Math.random() * lights.length)];
		setSelectedLight(randomLight);
	};

	return (
		<>
			<div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-secondary">
				<div className="bg-dark p-5 rounded-5" style={{ width: '140px', height: '380px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'}}>
					<div className="d-flex flex-column justify-content-between align-items-center h-100">
						<div
							className={`light red ${selectedLight === "red" ? "selected" : ""}`}
							style={lightStyle}
							onClick={() => setSelectedLight("red")}
						></div>
						<div
							className={`light yellow ${selectedLight === "yellow" ? "selected" : ""}`}
							style={lightStyle}
							onClick={() => setSelectedLight("yellow")}
						></div>
						<div
							className={`light green ${selectedLight === "green" ? "selected" : ""}`}
							style={lightStyle}
							onClick={() => setSelectedLight("green")}
						></div>
					</div>
				</div>
				<button
					className="btn btn-warning p-1 m-5"
					onClick={changeSelectedLight}>Cambiar Luz</button>
			</div>
		</>
	);
};


// Definimos los estilos básicos para las luces
const lightStyle = {
	width: '80px',
	height: '80px',
	borderRadius: '50%',
	transition: 'background-color 0.3s, box-shadow 0.3s'
};

const Home = () => {
	return (
		<div>
			<TrafficLight />
		</div>
	);
};

export default Home;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Loader from "./components/Loader";
import About from "./pages/About";
import "./App.css";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/about" element={<About />} />
					</Routes>
					<Footer />
				</Router>
			)}
		</>
	);
};

export default App;

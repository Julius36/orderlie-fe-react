import React from 'react';

import Header from './component/Header';
import Footer from './component/footer';
import { Outlet } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';

function App() {
	return (
		<>
			<div className='w-screen h-auto flex flex-auto '>
				<Header />
			</div>
			{/* <Homepage /> */}
			<Outlet />

			<Footer />
		</>
	);
}

export default App;

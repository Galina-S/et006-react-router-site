import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { Page404 } from './Page404';
import { PageBlank } from './PageBlank';
import { PageBordeaux } from './PageBordeaux';
import { PageParis } from './PageParis';

export const PageFrance = () => {
	return (
		<>
			<p>Welcome to the France page.</p>
			<nav>
				<NavLink to="paris">Paris</NavLink>
				<NavLink to="bordeaux">Bordeaux</NavLink>
			</nav>

			<Routes>
				<Route path="paris" element={<PageParis />} />
				<Route path="bordeaux" element={<PageBordeaux />} />
				<Route path="/" element={<PageBlank />}  />
				<Route path="*" element={<Page404 />}  />
			</Routes>
		</>
	);
};

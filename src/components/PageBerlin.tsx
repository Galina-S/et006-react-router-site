import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageMitte } from './PageMitte';
import { PageSteglitz } from './PageSteglitz';
import { PageTiergarten } from './PageTiergarten';

import { PageBrandenburgGate } from './PageBrandenburgGate';
import { PageCheckpointCharlie } from './PageCheckpointCharlie';
import { PageUnterDenLinden } from './PageUnterDenLinden';

export const PageBerlin = () => {
	return (
		<>
			<p>Welcome to the Berlin page.</p>
			<nav>
				<NavLink to="tiergarten">Tiergarten</NavLink>
				<NavLink to="steglitz">Steglitz</NavLink>
				<NavLink to="mitte">Mitte</NavLink>
			</nav>
			<Routes>
				<Route path="tiergarten" element={<PageTiergarten />} />
				<Route path="steglitz" element={<PageSteglitz />} />
				<Route path="mitte" element={<PageMitte />}>

				<Route path="checkpointCharlie"
					element={<PageCheckpointCharlie />}	/>
				<Route path="brandenburgGate"
					element={<PageBrandenburgGate />}/>
				<Route path="unterDenLinden" element={<PageUnterDenLinden />} />
			</Route>
			</Routes>
		</>
	);
};

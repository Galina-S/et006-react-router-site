import { useParams, NavLink, Outlet } from 'react-router-dom';
import cities from "../data/cities.json";

 export const PageSpain = () => {
	const {idCode} = useParams();

	const city = cities.find(m => String(m.idCode) === String (idCode));
	console.log(city);

	return (
		<>
			<p>Welcome to the Spain page.</p>
			<p className='cityChoices'> 
			There are {cities.length} cities to visit: {' '}
				{cities.map((city, index) => {
					return (
					<span key= {city.idCode}>
						<span className="cityLink" >
						<NavLink to = {String (city.idCode)} >{city.name}</NavLink>
						</span>
						{cities.length -1 > index && <span>, </span>}
					</span>
					)
				})}
			</p>
			<Outlet context={city}/>
		</>
	);
};

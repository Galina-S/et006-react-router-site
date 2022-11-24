import { useLocation } from "react-router-dom";

export const Page404 = () => {
    const location = useLocation();
    console.log(location);
        return (
            <div className="page404">
                <h2>Page <code> {location.pathname}</code> doesn't exist.</h2>
            </div>
        );
    };
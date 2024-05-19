{/* Step - 04 -> Menu.jsx : Helmet provider */ }
import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <h2>Menu part</h2>
        </div>
    );
};

export default Menu;
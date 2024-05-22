{/* Step - 04 -> Menu.jsx : Helmet provider */ }
import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover';
// import MenuCover from '../../Components/MenuCover';
// import OfferedMenu from './OfferedMenu';
// import DessertsMenu from './DessertsMenu';
// import PizzaMenu from './PizzasMenu';
// import SaladsMenu from './SaladsMenu';
// import SoupsMenu from './SoupsMenu';
import useMenu from '../../Hooks.jsx/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {

    const [menu] = useMenu();

    const kacchi = menu.filter(item => item.category === 'kacchi');
    const fish = menu.filter(item => item.category === 'fish');
    const chicken = menu.filter(item => item.category === 'chicken');
    const popularFood = menu.filter(item => item.category === 'popular');

    const offeredFood = menu.filter(item => item.category === 'offered');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        // <div>
            
            // <Helmet>
            //     <title>BD Restaurant | Menu</title>
            // </Helmet>

            // <Cover image={'https://i.ibb.co/48N3Ymx/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg'} title={'OUR MENU'} des={'Would you like to try a dish?'} />

        //     <OfferedMenu />

        //     <DessertsMenu />
            
        //     <PizzaMenu />
            
        //     <SaladsMenu />
            
        //     <SoupsMenu/>

        // </div>

        <div>

            {/* Dynamic title */}
            <Helmet>
                <title>BD Restaurant | Menu</title>
            </Helmet>

            {/* Main Cover image */}
            <Cover image={'https://i.ibb.co/48N3Ymx/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg'} title={'OUR MENU'} des={'Would you like to try a dish?'} />

            {/* Dynamic title */}
            <SectionTitle subHeading={'---Do not miss---'} heading={'TODAY OFFER'} />

            {/* Offered Menu Item  */}
            <MenuCategory item={offeredFood} />

            {/* popular Menu Item  */}
            <MenuCategory item={popularFood} image={'https://i.ibb.co/qktpV2r/1920x1080-desserts-background-4uc1p5ryi7mklzro.jpg'} title={'popular'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* Kacchi Menu Item  */}
            <MenuCategory item={kacchi} image={'https://i.ibb.co/qktpV2r/1920x1080-desserts-background-4uc1p5ryi7mklzro.jpg'} title={'kacchi'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* fish Menu Item  */}
            <MenuCategory item={fish} image={'https://i.ibb.co/qktpV2r/1920x1080-desserts-background-4uc1p5ryi7mklzro.jpg'} title={'fish'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* chicken Menu Item  */}
            <MenuCategory item={chicken} image={'https://i.ibb.co/qktpV2r/1920x1080-desserts-background-4uc1p5ryi7mklzro.jpg'} title={'chicken'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* Dessert Menu Item  */}
            <MenuCategory item={dessert} image={'https://i.ibb.co/qktpV2r/1920x1080-desserts-background-4uc1p5ryi7mklzro.jpg'} title={'dessert'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* Pizza Menu Item  */}
            <MenuCategory item={pizza} image={'https://i.ibb.co/crT9tm7/free-photo-of-photo-of-a-vegetarian-pizza-with-a-hand-holding-one-slice.jpg'} title={'pizza'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* Salad Menu Item  */}
            <MenuCategory item={salads} image={'https://i.ibb.co/GFNwsmg/pexels-photo-7245482.jpg'} title={'salad'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* Soup Menu Item  */}
            <MenuCategory item={soups} image={'https://i.ibb.co/47PLj6X/pexels-photo-2133989.jpg'} title={'soup'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            {/* Drink Menu Item  */}
            <MenuCategory item={drinks} image={'https://i.ibb.co/47PLj6X/pexels-photo-2133989.jpg'} title={'drink'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />


        </div>


    );
};

export default Menu;
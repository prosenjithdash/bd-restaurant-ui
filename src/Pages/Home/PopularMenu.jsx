import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItemsCard from "../../Components/MenuItemsCard";

const PopularMenu = () => {

    // Hold Popular menu data.
    const [popularMenu, setPopularMenu] = useState([])

    // Load Popular menu data.
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // Filter all popular food items.
                const popularItems = data.filter(item => item.category === 'popular');              setPopularMenu(popularItems)
        })
    }, [])
    
    return (
        <section className="mb-[50px]">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'} />

            <div className="grid grid-cols-1 md:grid-col-1 md:grid-cols-2 gap-[24px]">
                {
                    popularMenu.map(item => <MenuItemsCard key={item.id} item={item}></MenuItemsCard>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;
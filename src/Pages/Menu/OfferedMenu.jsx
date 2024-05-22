// import { useEffect, useState } from "react";
// import SectionTitle from "../../Components/SectionTitle";
// import MenuItemsCard from "../../Components/MenuItemsCard";
// import { Link } from "react-router-dom";

// const OfferedMenu = () => {

//     // Hold OfferedMenu menu data.
//     const [offerMenu, setOfferMenu] = useState([])

//     // Load OfferedMenu menu data.
//     useEffect(() => {
//         fetch('menu.json')
//             .then(res => res.json())
//             .then(data => {
//                 // Filter all OfferedMenu food items.
//                 const popularItems = data.filter(item => item.category === 'offered'); setOfferMenu(popularItems)
//             })
//     }, [])

//     return (
//         <section className="mb-[50px] max-w-[1280px] mx-auto">
//             <SectionTitle subHeading={'---Do not miss---'} heading={'TODAY OFFER'} />

//             <div className="grid grid-cols-1 md:grid-col-1 md:grid-cols-2 gap-[24px]">
//                 {
//                     offerMenu.map(item => <MenuItemsCard key={item.id} item={item}></MenuItemsCard>)
//                 }
//             </div>

            // <div className="text-center mt-[50px] ">
            //     <Link to='/orderFood'>
            //         <button className="btn bg-yellow-400  ">Order Offered Food</button>
            //     </Link>
            // </div>

//         </section>
//     );
// };

// export default OfferedMenu;
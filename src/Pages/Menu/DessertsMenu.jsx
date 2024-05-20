// import { useEffect, useState } from "react";
// import MenuItemsCard from "../../Components/MenuItemsCard";
// import MenuCover from "../../Components/MenuCover";
// import { Link } from "react-router-dom";

// const DessertsMenu = () => {

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


//         <div>
//             <MenuCover image={'https://i.ibb.co/qktpV2r/1920x1080-desserts-background-4uc1p5ryi7mklzro.jpg'} title={'DESSERTS'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

//             <section className="mb-[50px] mt-[100px] max-w-[1280px] mx-auto">
                

//                 <div className="grid grid-cols-1 md:grid-col-1 md:grid-cols-2 gap-[24px]">
//                     {
//                         offerMenu.map(item => <MenuItemsCard key={item.id} item={item}></MenuItemsCard>)
//                     }
//                 </div>

//                 <div className="text-center mt-[50px] ">
//                     <Link to='/orderFood'>
//                         <button className="btn bg-yellow-400  ">Order Dessert Food</button>
//                     </Link>
//                 </div>

//             </section>
//         </div>
//     );
// };

// export default DessertsMenu;
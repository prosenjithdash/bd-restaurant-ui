// import { useEffect, useState } from "react";
// import MenuItemsCard from "../../Components/MenuItemsCard";
// import MenuCover from "../../Components/MenuCover";
// import { Link } from "react-router-dom";

// const SoupsMenu = () => {

//     // Hold OfferedMenu menu data.
//     const [soupMenu, setSoupMenu] = useState([])

//     // Load OfferedMenu menu data.
//     useEffect(() => {
//         fetch('menu.json')
//             .then(res => res.json())
//             .then(data => {
//                 // Filter all OfferedMenu food items.
//                 const popularItems = data.filter(item => item.category === 'soup'); setSoupMenu(popularItems)
//             })
//     }, [])

//     return (


//         <div>
//             <MenuCover image={'https://i.ibb.co/47PLj6X/pexels-photo-2133989.jpg'} title={'SOUPS'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

//             <section className="mb-[50px] mt-[100px]  max-w-[1280px] mx-auto">


//                 <div className="grid grid-cols-1 md:grid-col-1 md:grid-cols-2 gap-[24px]">
//                     {
//                         soupMenu.map(item => <MenuItemsCard key={item.id} item={item}></MenuItemsCard>)
//                     }
//                 </div>

//                 <div className="text-center mt-[50px] ">
//                     <Link to='/orderFood'>
//                         <button className="btn bg-yellow-400  ">Order Soup Food</button>
//                     </Link>
//                 </div>

//             </section>
//         </div>
//     );
// };

// export default SoupsMenu;
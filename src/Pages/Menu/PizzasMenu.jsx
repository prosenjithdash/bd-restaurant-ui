// import { useEffect, useState } from "react";
// import MenuItemsCard from "../../Components/MenuItemsCard";
// import MenuCover from "../../Components/MenuCover";
// import { Link } from "react-router-dom";

// const PizzasMenu = () => {

//     // Hold OfferedMenu menu data.
//     const [pizzaMenu, setPizzaMenu] = useState([])

//     // Load OfferedMenu menu data.
//     useEffect(() => {
//         fetch('menu.json')
//             .then(res => res.json())
//             .then(data => {
//                 // Filter all OfferedMenu food items.
//                 const popularItems = data.filter(item => item.category === 'pizza'); setPizzaMenu(popularItems)
//             })
//     }, [])

//     return (


//         <div>
//             <MenuCover image={'https://i.ibb.co/crT9tm7/free-photo-of-photo-of-a-vegetarian-pizza-with-a-hand-holding-one-slice.jpg'} title={'PIZZA'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

//             <section className="mb-[50px] mt-[100px]  max-w-[1280px] mx-auto">


//                 <div className="grid grid-cols-1 md:grid-col-1 md:grid-cols-2 gap-[24px]">
//                     {
//                         pizzaMenu.map(item => <MenuItemsCard key={item.id} item={item}></MenuItemsCard>)
//                     }
//                 </div>

//                 <div className="text-center mt-[50px] ">
//                     <Link to='/orderFood'>
//                         <button className="btn bg-yellow-400  ">Order Pizza Food</button>
//                     </Link>
//                 </div>

//             </section>
//         </div>
//     );
// };

// export default PizzasMenu;
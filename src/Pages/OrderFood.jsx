import { Helmet } from "react-helmet-async";
import Cover from "../Components/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; import { useState } from "react";
import useMenu from "../Hooks.jsx/useMenu";
import { useParams } from "react-router-dom";
import OrderTab from "../Components/OrderTab";

const OrderFood = () => {

    const categories = ['offered', 'popular', 'kacchi', 'fish', 'chicken','pizza', 'soup', 'salad', 'dessert', 'drinks']
    const { category } = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);

    console.log(initialIndex)

    const [tabIndex, setTabIndex] = useState(initialIndex);
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
        <div>
            <Helmet>
                <title>BD Restaurant | Order Food </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <Cover image={'https://i.ibb.co/YNpW3JG/food-3329079-960-720.pnghttps://i.ibb.co/ZzZGv9r/png-clipart-wayos-place-sevenum-mixed-grill-restaurant-buffet-hotel-food-recipe.png'} title={'FOOD ORDER'} des={'Would you like to try a dish?'} />
            

            {/* <Tab>POPULAR FOOD</Tab>
                        <Tab>OFFERED FOOD</Tab> */}
            
            {/* <TabPanel>
                            <div className="lg:grid lg:grid-cols-3 gap-[24px]">
                                {
                                    popularFood.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="lg:grid lg:grid-cols-3 gap-[24px]">
                                {
                                    offeredFood.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel> */}
            
            {/* <div className="max-w-[1280px] mx-auto text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
              
                      

   
                        <TabPanel>
                            <div className="lg:grid lg:grid-cols-3 gap-[24px]">
                                {
                                     salads.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        
                        <TabPanel>
                        <div className="lg:grid lg:grid-cols-3 gap-[24px]">
                            {
                                pizza.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                            }
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="lg:grid lg:grid-cols-3 gap-[24px]">
                            {
                                soups.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                            }
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="lg:grid lg:grid-cols-3 gap-[24px]">
                            {
                                dessert.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                            }
                        </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="lg:grid lg:grid-cols-3 gap-[24px]">
                            {
                                drinks.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
                            }
                        </div>
                        </TabPanel>

              
                </Tabs>
           </div> */}
            <div className=' lg:max-w-[1280px] lg:mx-auto text-center '>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>


                    <TabList>

                        <Tab>Offered</Tab>
                        <Tab>Popular</Tab>
                        <Tab>Kacchi</Tab>
                        <Tab>Fish</Tab>
                        <Tab>chicken</Tab>

                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderTab items={offeredFood}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={popularFood}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={kacchi}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={fish}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={chicken}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>

          
            

        </div>
    );
};

export default OrderFood;
import { Helmet } from "react-helmet-async";
import Cover from "../Components/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; import { useState } from "react";
import useMenu from "../Hooks.jsx/useMenu";
import FoodCard from "../Components/FoodCard";

const OrderFood = () => {

    const [menu] = useMenu();
    const [tabIndex, setTabIndex] = useState(0);

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
            

           
            <div className="max-w-[1280px] mx-auto text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>POPULAR FOOD</Tab>
                        <Tab>OFFERED FOOD</Tab>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>

                    </TabList>
              
                        <TabPanel>
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
                        </TabPanel>

   
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
           </div>

          
            

        </div>
    );
};

export default OrderFood;
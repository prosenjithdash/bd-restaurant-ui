import SectionTitle from "../../Components/SectionTitle";

const Featured = () => {
    return (
        // https://i.ibb.co/M86Hctt/photo-1574966739987-65e38db0f7ce-q-80-w-1000-auto-format-fit-crop-ixlib-rb-4-0.jpg
        // 
        <div className="max-w-[1920px] mx-auto text-white bg-fixed pt-8 my-20   bg-[url('https://i.ibb.co/n1pNxSF/images-q-tbn-ANd9-Gc-RVPzs-YEu8-Xh-Ql7-ERWW4w-F1-c-O40-db44r-FDM0ecmaelg-s.jpg')]"  >
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'} />
            
            
            <div className="lg:flex justify-center items-center pb-[130px] pt-12 px-36 gap-[68px] bg-black bg-opacity-30 ">
                <div>
                    <img className="w-[2500px] h-[350px]" src="https://i.ibb.co/XJGvDDz/1-2-Ku9z9-T4-QIBDz-Wj-PSWVw-Qw.jpg" alt="" />
                </div>
                <div className="text-[24px] ">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.

                    </p>
                    <button className="btn">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;
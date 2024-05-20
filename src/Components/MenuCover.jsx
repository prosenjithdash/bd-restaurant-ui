
const MenuCover = ({ image, title, des }) => {
    return (
        <div className=" max-w-[1920px] mx-auto lg:h-[450px] h-[250px] w-full lg:pt-[125px] pt-[60px] bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>

            <div className=" lg:max-w-[1000px] max-w-[300px] lg:h-[200px]  mx-auto items-center lg:pt-[15px] bg-black bg-opacity-65  text-white">

                <div className=" text-center py-[30px]">
                    <h2 className="lg:text-[45px] text-[25px] ">{title}</h2>
                    <p className="lg:text-[16px] text-[14px]">{des}</p>
                </div>

            </div>

        </div>
    );
};

export default MenuCover;
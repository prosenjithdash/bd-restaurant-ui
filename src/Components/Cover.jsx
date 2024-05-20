
const Cover = ({image,title,des}) => {
    return (
        <div className=" lg:h-[600px] h-[350px] max-w-[1900px] mx-auto lg:pt-[200px] pt-[130px] bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
           
            <div className="lg:max-w-[1000px] max-w-[300px] lg:h-[250px]  mx-auto items-center lg:pt-[25px] bg-black bg-opacity-65  text-white">

                <div className="text-center py-[30px]">
                    <h2 className="lg:text-[60px] text-[30px] font-bold">{title}</h2>
                    <p className="lg:text-[24px] text-[18px]">{des}</p>
               </div>

            </div>
           
        </div>
    );
};

export default Cover;
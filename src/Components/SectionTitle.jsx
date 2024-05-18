
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="max-w-[500px] mx-auto text-center mt-[100px] mb-[50px]">
            <h3 className="text-[#D99904] mb-[16px]">{subHeading}</h3>
            <h1 className="border-y-4 text-4xl uppercase py-[20px]">{ heading}</h1>
        </div>
    );
};

export default SectionTitle;
import ColorButton from "../buttons/colorButton";

const Color = ({ colors }) => {
    return (
        <div className=" ">
            <div className="text-left flex flex-col gap-2  w-full">
                <label className="font-thin">Color</label>
                <div>
                    {colors.map(element => (
                        <ColorButton key={element} color={element} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Color;

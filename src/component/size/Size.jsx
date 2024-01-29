import OutlineButton from "../buttons/outlineButton";

const Size = ({ size }) => {
    return (
        <div className="py-2">
            <div className="text-left flex flex-col gap-2 w-full">

                <label className="font-thin">Talle</label>
                <div>
                    {size.map(element => (
                        <OutlineButton key={element} text={element} />
                    ))}
                </div>
            </div>
        </div>
    )


};

export default Size;
const ColorButton = ({ color, handleClick, isSelected }) => {
    const handle = () => {
        handleClick(color)
    }
    return (
        <button onClick={handle} className={` ${isSelected ? "border-2" : "border-1"} text-transparent font-bold py-2 px-4 ml-2 rounded-full  border-gray-800`} style={{ backgroundColor: color }} > a</button >

    )
}

export default ColorButton
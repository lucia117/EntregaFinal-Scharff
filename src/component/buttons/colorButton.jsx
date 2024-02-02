const ColorButton = ({ color, handleClick }) => {
    const handle = () => {
        handleClick(color)
    }
    return (
        <button onClick={handle} className="bg-blue-500 hover:bg-blue-700 text-transparent font-bold py-2 px-4 ml-2 rounded-full">a</button>
    )
}

export default ColorButton
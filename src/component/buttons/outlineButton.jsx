const OutlineButton = ({ text }) => {
    console.log("Component-" + text)
    return (
        <button class="bg-transparent font-thin hover:bg-gray-100 text-blue-700 py-1 px-3 border border-blue-500 rounded shadow  m-0.5">
            {text}
        </button>
    )
}

export default OutlineButton

const Footer = () => {
    return (
        <footer className="flex w-full gap-x-12 border-t border-blue-gray-50 py-6 ">
            <div className=" m-auto">
                <ul className="flex gap-y-2 gap-x-8">
                    <li className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        About Us
                    </li>
                    <li className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        License
                    </li>
                    <li className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        Contribute
                    </li>
                    <li className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
                        Contact Us

                    </li>
                </ul>
            </div>

        </footer >
    );
}

export default Footer
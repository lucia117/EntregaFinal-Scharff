{
    links.map((link) => (

        <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) => (
                `text-lg uppercase font-semibold ${isActive ? "text-purple-400" : "text-white"}`
            )}
        >
            {link.label}
        </NavLink>

    ))
}

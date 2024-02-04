import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import IconButton from "../buttons/iconButton";
import { FaGoogle, FaRegArrowAltCircleRight } from "react-icons/fa";


const Login = () => {
    const { login, register, googleLogin } = useContext(UserContext);


    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        login(values);
    };

    return (
        <div className="w-full max-w-xs container m-auto">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="text-4xl  my-3 ">
                    Bienvenido
                    <hr />
                </div>
                <div className="mb-4">
                    <IconButton onClick={googleLogin} >
                        <FaRegArrowAltCircleRight size={20} className="mr-2" />
                        Iniciar sesión
                    </IconButton>
                </div>
                <div className="mb-6">
                    <IconButton onClick={() => register(values)}>
                        <FaGoogle size={20} className="mr-2" />
                        Registrarse con Google
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Login
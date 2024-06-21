import Button from "../components/BasicComponents/Button.tsx";
import {useState} from "react";
import {IoMdEye, IoMdEyeOff} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import {useSetUser} from "../providers/UserProvider";
import {useServer} from "../providers/ServerProvider";
import Input from "../components/BasicComponents/Input";

const Login = () => {
    const navigate = useNavigate();
    const api = useServer();
    const setUser = useSetUser();

    const [userForm, setUserForm] = useState({
        login: "",
        password: "",
        wrong: false
    });

    const [passwordToggle, setPasswordToggle] = useState(false);
    const passwordHandler = (e) => {
        e.preventDefault();
        setPasswordToggle(!passwordToggle);
    }

    const loginResult = async () => {
        try {
            const response = await fetch(
                `${api}/user/log-in?username=${userForm.login}&password=${userForm.password}`
            );
            if (response.ok) {
                const data = await response.json();
                setUser({
                    ...data,
                    manager: data.department.department_id === data.department_id
                });
                navigate("/navigation");
            } else {
                navigate("/navigation");
                setUserForm(prevState => ({
                    ...prevState, wrong: true
                }));
            }
        } catch (e) {
            console.log(e);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        loginResult();
    }

    return <form onSubmit={submitHandler} className={"LogInPage"}>
        <div className="log-in-background v-center">
            <h1>PRIHLÁSENIE</h1>
            <div className={"white-outline"}>
                <div className={"login-input"}>
                    <Input type={"text"}
                           name={"login"}
                           position={"close"}
                           size={3}
                           value={userForm.login}
                           setter={setUserForm}
                           state={userForm}
                           autoComplete={"username"}>
                        Meno</Input>
                </div>
                <div className={"password-input"}>
                    <Input type={passwordToggle ? "text" : "password"}
                           position={"close"}
                           size={3}
                           name={"password"}
                           value={userForm.password}
                           setter={setUserForm}
                           state={userForm}
                           autoComplete="current-password">
                        Heslo</Input>
                    <button onClick={(e) =>
                        passwordHandler(e)}>
                        {passwordToggle
                            ? <IoMdEyeOff/>
                            : <IoMdEye/>
                        }
                    </button>
                </div>
            </div>
        </div>
        <div className={"v-center"}>
            <Button type={"submit"}>
                PRIHLÁSIŤ SA
            </Button>
        </div>
    </form>
}

export default Login;
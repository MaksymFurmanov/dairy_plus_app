import Button from "../components/BasicComponents/Button.tsx";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    return <div className={"MainPage v-center"}>
        <h1>Diary Plus</h1>
        <Button onClick={() => navigate("/log_in")}>
            PRIHLASENIE
        </Button>
    </div>
}

export default Main
import PageTitle from "../components/BasicComponents/PageTitle";
import EmployeeList from "../components/Administration/EmployeeList";
import {BsPlusCircleFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {useDepartments} from "../providers/DepartmentsProvider";

const Administration = () => {
    const departments = useDepartments();

    const navigate = useNavigate();

    const employeeLists = departments.map((department, index) => {
        return <EmployeeList key={index}
                             department={department}/>
    });

    return <>
        <div className={"h-stretch-center"}>
            <PageTitle name={"Správa systému"}/>
            <button className={"plus-button"}
                    onClick={() => navigate("/admin/new_employee")}>
                <BsPlusCircleFill/>
            </button>
        </div>
        <div className={"AdminPage"}>
            {employeeLists}
        </div>
    </>
}

export default Administration
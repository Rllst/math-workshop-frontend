import BaseTab from "./BaseTab";
import useApi from "../../../../hooks/useApi";
import TeamService from "../../../../services/TeamService";
import TeamForm from "../forms/TeamForm";

const TeamTab = () => {
    const [teamMembers, changeHandler] = useApi(TeamService.getAll);
    const columns = [
        {
            property:"id",
            header: "Id"
        },
        {
            property: "name",
            header: "Name"
        },
        {
            property: "description",
            header: "Description"
        }
    ]
    return (
        <BaseTab data={teamMembers} tableColumns={columns} handler ={changeHandler} form={TeamForm}/>
    )
}



export default TeamTab;
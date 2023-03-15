import TeamService from "../../../services/TeamService";
import useApi from "../../../hooks/useApi";
import {Grid} from "grommet";
import TeamMemberCard from "./TeamMemberCard";

const TeamContent = ()=>{
    const [team] = useApi(TeamService.getAll);
    return(
        <Grid columns='medium' gap='small'>
            {team.map(m=><TeamMemberCard member={m}/>)}
        </Grid>
    )
}

export default TeamContent;
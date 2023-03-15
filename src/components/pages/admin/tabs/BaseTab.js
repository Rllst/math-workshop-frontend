import {Box, Button, DataTable, Pagination} from "grommet";
import useTab from "../../../../hooks/useTab";
import {Add} from "grommet-icons";
import BaseFormLayer from "../forms/BaseFormLayer";

const BaseTab = ({data, tableColumns, handler, form})=>{
    const [pageParams, setPageParams] = useTab(handler);
    return(
        <Box background='light-3' pad='small' round='xsmall'>
            <Button size="small" icon={<Add />} primary onClick={()=>setPageParams(true,null)}/>
            <DataTable
                data={data}
                columns={tableColumns}
                onClickRow={(e)=>setPageParams(true,e.datum.id)}
            >
                <Pagination/>
            </DataTable>
            {pageParams.isActive &&
                <BaseFormLayer  id={pageParams.currentID} form={form} onExit={()=>setPageParams(false,null)}/>
            }
        </Box>
    )
}

export default BaseTab;
import {Box, Button, Layer, Text} from "grommet";
import {Return, Save, Trash, Update} from "grommet-icons";
import useCrudConsumer from "../../../../hooks/useCrudConsumer";


const BaseFormLayer = ({form, onExit, id})=>{
    const [ref, crud] = useCrudConsumer(onExit);
    const Form = form;

return(
    <Layer>
        <Box fill="vertical" overflow="auto" width="xlarge" pad="medium">
            <Box direction='row' height={
                {
                    min: 'xxsmall'
                }
            }>
                <Button icon={<Return/>} label="Go back" color='status-warning' onClick={onExit}/>
            </Box>
            {id && <Text size='2xl'>Edit</Text>}
            {!id && <Text size='2xl'>Create</Text>}
            <Form id={id} ref={ref}/>
            <Box direction='row' height={
                {
                    min: 'xxsmall'
                }
            }>
                {id && <Button icon={<Update/>} label='Update!' onClick={crud.update}/>}
                {!id && <Button icon={<Save/>} label='Save!' onClick={crud.create}/>}
                {id && <Button icon={<Trash/>} color='status-error' label='Delete!' onClick={crud.remove}/>}
            </Box>
        </Box>
    </Layer>
)
}
export default BaseFormLayer;
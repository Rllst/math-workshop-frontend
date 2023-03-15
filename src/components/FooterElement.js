import {Box, Footer, Text} from "grommet";

export default function FooterElement(){
    return(
        <Footer background='dark-3' height='xsmall' pad='small'>
            <Box fill alignSelf='center'>
                <Text color='focus'>Математична майстерня 2019-2023</Text>
                <Text size='small' alignSelf='end'>Знайшли баг або знаєте як покрацити сайт? Зв'яжіться зі мною!</Text>
           </Box>
        </Footer>
    );
}
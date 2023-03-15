import {Box, Grid, Image, Text, WorldMap} from "grommet";
import {api} from "../../../Constansts";
import {useState} from "react";
import {errorMessage, successMessage, warningMessage} from "../../../ToastHelper";
import MenuCard from "./MenuCard";
import QuoteService from "../../../services/QuoteService";
import useApi from "../../../hooks/useApi";
import {Article, Gallery, Storage, Calendar, Group} from "grommet-icons";
import InfoBox from "../../general/InfoBox";
import ContentBox from "../../general/ContentBox";

const WelcomeContent = ()=>{
    const [place, setPlace] = useState();
    const [quote] = useApi(QuoteService.getRand);
    const onSelectPlace = (place) => {
        setPlace([{color: 'status-warning' , location: place}]);
        let distance = Math.sqrt(Math.pow((place[0]-48.2914900),2)+Math.pow((place[1]-25.9403400), 2));
        if(distance>60) errorMessage('Зовсім далеко')
        if(distance<=60 && distance>=5) warningMessage('Вже ближче');
        if(distance<5) successMessage('Так, ми тут');
    }
    return(
    <Box>
        <Box pad='medium'>
            <Text size='3xl' color='brand'>Науково-творче об'єднання "Математична Майстерня"</Text>
        </Box>

        <Grid
            rows={['auto']}
            columns={['1/3', '2/3']}
            responsive
        >
            <Box>
                <MenuCard icon={Article} link='/news' title='Новини' img='https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
                <MenuCard icon={Gallery} link='/gallery' title='Галерея' img='https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600'/>
                <MenuCard icon={Calendar} link='/calendar' title='Календар Заходів' img='https://images.pexels.com/photos/636246/pexels-photo-636246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                <MenuCard icon={Storage} link='/archive' title='Архів' img='https://images.pexels.com/photos/6550462/pexels-photo-6550462.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
                <MenuCard icon={Group} link='/team' title='Наша команда' img='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </Box>

            <Box gap='small'>
                <Box>
                    <InfoBox title='Цитата дня'/>
                    <ContentBox>
                        <Text size='2xl'>{'"'+quote.content+'"'}</Text>
                        <Text size='xlarge'>{quote.author}</Text>
                    </ContentBox>
                </Box>
                <Box>
                    <InfoBox title='Вгадай де ми'/>
                    <ContentBox>
                        <WorldMap color='border' onSelectPlace={onSelectPlace} places={place}/>
                    </ContentBox>
                </Box>
                <Box>
                    <InfoBox title='Випадкове фото'/>
                    <ContentBox>
                        <Image src={api+'/gallery/random/img'}/>
                    </ContentBox>
                </Box>
            </Box>
        </Grid>
    </Box>)
}

export default WelcomeContent;
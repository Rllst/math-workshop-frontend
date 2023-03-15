import {Anchor, Box, Header, Menu, Nav, TextInput} from "grommet";
import {
    Article,
    Calculator,
    Cubes,
    Gallery,
    Search,
    Menu as MenuItem,
    Instagram,
    Facebook,
    MailOption, Phone, UserWorker, Calendar, Group, Storage
} from "grommet-icons";

const HeaderElement = ({onQueryChange}) =>{
    const handleQueryChange = (e)=>{
        onQueryChange(e.target.value);
    }
    return(
            <Header background='light-1' height="xsmall" pad='small'>
                <Anchor
                icon={<Cubes/>}
                label="Математична Майстерня"
                href='/'
                />
                <Box fill align="center" justify="start" pad="small">
                    <Box width="medium" gap="medium">
                        {onQueryChange && <TextInput icon={<Search />} placeholder="search ..."  onChange={handleQueryChange}/>}
                    </Box>
                </Box>
                <Nav align="center" direction="row">
                    <Instagram/>
                    <Facebook/>
                    <MailOption/>
                    <Phone/>
                    <Menu
                        dropProps={{ align: { top: 'bottom', left: 'left' } }}
                        label="Меню"
                        items={[
                            { label: 'Головна', icon: <Calculator/>, gap:'small', href: '/'},
                            { label: 'Новини', icon: <Article />, gap: 'small', href: '/news' },
                            { label: 'Галерея', icon: <Gallery />, gap: 'small', href: '/gallery' },
                            { label: 'Архів', icon: <Storage/>, gap: 'small', href: '/archive'},
                            { label: 'Наша команда', icon: <Group />, gap: 'small', href: '/team'},
                            { label: 'Календар подій', icon: <Calendar />, gap: 'small', href: '/calendar'},
                            { label: 'Адмін', icon: <UserWorker />, gap: 'small', href: '/admin'},
                        ]}
                    />
                    <MenuItem/>
                </Nav>
            </Header>
    );
}

export default HeaderElement;
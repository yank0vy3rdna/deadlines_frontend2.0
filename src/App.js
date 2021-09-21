import './App.css';
import {
    MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle,
    MDBCol,
    MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav,
    MDBNavbarToggler,
    MDBRow
} from "mdb-react-ui-kit";
import {useState} from "react";

function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <div>
            {/*<MDBNavbar expand='lg' light bgColor='light'>*/}
            {/*    <MDBContainer fluid>*/}
            {/*        <MDBNavbarBrand href='#'>Deadlines</MDBNavbarBrand>*/}


            {/*    </MDBContainer>*/}
            {/*</MDBNavbar>*/}
            <MDBContainer className="" style={{"height": "80vh"}}>
                <MDBRow center style={{'height': '100%'}} className=''>
                    <MDBCol center size='4' className='col-example '>
                        <MDBCard center style={{maxWidth: '35rem'}}>
                            <MDBCardBody>
                                <MDBCardTitle>Deadlines</MDBCardTitle>
                                <MDBCardText>
                                    Deadlines - приложение для отслеживания дедлайнов студентами. Зарегистрируйся, найди
                                    свою группу и получай оповещения о грядущих дедлайнах по email или telegram, или
                                    создай собственную группу, пригласи одногруппников и помоги им отследить все
                                    дедлайны


                                </MDBCardText>
                                <MDBBtn>Login</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default App;

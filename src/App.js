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
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <div>
            {/*<MDBNavbar expand='lg' light bgColor='light'>*/}
            {/*    <MDBContainer fluid>*/}
            {/*        <MDBNavbarBrand href='#'>Deadlines</MDBNavbarBrand>*/}


            {/*    </MDBContainer>*/}
            {/*</MDBNavbar>*/}
            <MDBContainer className="" style={{"height": "100vh"}}>
                <LoginPage/>
            </MDBContainer>
        </div>
    );
}

export default App;

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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useState} from "react";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <Router>
            <MDBContainer className="" style={{"height": "100vh"}}>
                <MDBRow>

                    <MDBNavbar expand='lg' light bgColor='light'>
                        <MDBContainer fluid>
                            <MDBNavbarBrand href='#'>Deadlines</MDBNavbarBrand>


                        </MDBContainer>
                    </MDBNavbar>
                </MDBRow>
                <Switch>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path="/">
                        <MainPage/>
                    </Route>
                </Switch>
            </MDBContainer>
        </Router>
    );
}

export default App;

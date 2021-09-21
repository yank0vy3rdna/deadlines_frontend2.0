import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBInputGroup,
    MDBRow
} from "mdb-react-ui-kit";

function LoginPage() {
    return <MDBRow center style={{'height': '100%'}} className=''>
        <MDBCol center size='4' className='col-example '>
            <MDBCard center style={{maxWidth: '35rem'}}>
                <MDBCardBody>
                    <MDBCardTitle>Login</MDBCardTitle>
                    <MDBCardText>
                        <MDBInputGroup className='mb-3'>
                            <MDBInput label='Email input' id='typeEmail' type='email'/>
                            <MDBInput label='Password input' id='typePassword' type='password'/>
                            <MDBBtn>Login</MDBBtn>
                        </MDBInputGroup>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
}
export default LoginPage;

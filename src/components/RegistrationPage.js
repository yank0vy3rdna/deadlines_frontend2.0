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

function RegistrationPage() {
    return <MDBRow center style={{'height': '90%'}} className=''>
        <MDBCol center size='4' className='col-example '>
            <MDBCard center style={{maxWidth: '35rem'}}>
                <MDBCardBody>
                    <MDBCardTitle>Registration</MDBCardTitle>
                    <MDBCardText>
                        <MDBInputGroup className='mb-3'>
                            <MDBInput label='Email input' id='typeEmail' type='email'/>
                        </MDBInputGroup>
                        <MDBInputGroup className='mb-3'>
                            <MDBInput label='Password input' id='typePassword' type='password'/>
                        </MDBInputGroup>
                        <MDBInputGroup className='mb-3'>
                            <MDBInput label='Username' id='typeText' type='text' />
                        </MDBInputGroup>
                        <MDBInputGroup className='mb-3'>
                            <MDBInput label='University name' id='typeText' type='text' />
                        </MDBInputGroup>
                        <MDBInputGroup>
                            <MDBBtn>Registration</MDBBtn>
                        </MDBInputGroup>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
}
export default RegistrationPage;

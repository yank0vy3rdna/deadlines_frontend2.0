import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBInputGroup, MDBInputGroupText,
    MDBRow
} from "mdb-react-ui-kit";

function CreateGroupPage() {
    return <MDBRow center style={{'height': '90%'}} className=''>
        <MDBCol center size='6' className='col-example '>
            <MDBCard background='dark' className='text-white' center style={{maxWidth: '40rem'}}>
                <MDBCardBody>
                    <MDBCardTitle>Form for create group:</MDBCardTitle>
                    <MDBCard background='light' className='text-black' center style={{maxWidth: '40rem'}}>
                        <MDBCardBody>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='University name' id='typeText' type='text' />
                            </MDBInputGroup>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Specialization' id='typeText' type='text' />
                            </MDBInputGroup>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Сourse' id='typeNumber' type='number' />
                            </MDBInputGroup>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Group name' id='typeText' type='text' />
                            </MDBInputGroup>
                        </MDBCardBody>
                    </MDBCard>
                    <br/>
                    <MDBBtn className='text-dark' color='light'>Create Group</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
}
export default CreateGroupPage;

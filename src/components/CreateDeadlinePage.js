import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
    MDBInput,
    MDBInputGroup,
    MDBRow
} from "mdb-react-ui-kit";

function CreateDeadlinePage() {
    return <MDBRow center style={{'height': '90%'}} className=''>
        <MDBCol center size='6' className='col-example '>
            <MDBCard background='dark' className='text-white' center style={{maxWidth: '40rem'}}>
                <MDBCardBody>
                    <MDBCardTitle>Form for create deadline:</MDBCardTitle>
                    <MDBCard background='light' className='text-black' center style={{maxWidth: '40rem'}}>
                        <MDBCardBody>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Subject' id='typeText' type='text' />
                            </MDBInputGroup>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Task' id='typeText' type='text' />
                            </MDBInputGroup>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Description' id='typeText' type='text' />
                            </MDBInputGroup>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Date' id='typeText' type='text' />
                            </MDBInputGroup>
                            <MDBInputGroup className='mb-3'>
                                <MDBInput label='Link' id='textAreaExample' textarea rows={5} />
                            </MDBInputGroup>
                        </MDBCardBody>
                    </MDBCard>
                    <br/>
                    <MDBBtn className='text-dark' color='light'>Create</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
}
export default CreateDeadlinePage;

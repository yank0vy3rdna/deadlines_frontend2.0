import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdb-react-ui-kit";

function MainPage() {
    return <MDBRow center style={{'height': '100%'}} className=''>
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
}

export default MainPage;

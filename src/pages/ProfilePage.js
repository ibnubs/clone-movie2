import React, { Fragment } from 'react'
import HeaderProfile from '../components/HeaderProfile';
import { Container } from 'react-bootstrap';
import SliderHome from '../components/SliderHome';
import CategoryMovie from '../components/CategoryMovie';

//Css
import '../assets/style/login.scss';
import '../assets/style/style.scss';


const ProfilePage = () => {
    // const baca_dispatch = useDispatch()
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")


    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <Fragment>
            <Container >
                <HeaderProfile />
            </Container>
            <SliderHome />
            <Container>
                <p className="h2 text-left mt-2"><strong> Browser by category </strong></p>
                <CategoryMovie />
            </Container>

            {/* SignIn Modal Form */}
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title className="d-flex logo">
                        <Link to="" className="inline-block">
                            <img src={require("../assets/images/logo.png")} style={{ width: 40, height: 40 }} alt=""></img>
                        </Link>
                        <p className="h2 ml-3">MilanTV</p>
                    </Modal.Title>
                    <div className="close">
                        <button onClick={handleClose}>x</button>
                    </div>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Insert email" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Insert password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="submit" onClick={submit}>
                        Submit
                    </Button>
                    <p className="goto-sign-up">Created Account? <Link to="/signup" >SignUp</Link></p>
                </Modal.Footer>
            </Modal> */}
        </Fragment >
    )
}


export default ProfilePage;
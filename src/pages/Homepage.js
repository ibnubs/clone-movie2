import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from '../components/Navbar'
import { login } from '../store/actions/Auth';
import { Container, Pagination, Button, Modal, Form } from 'react-bootstrap';
// import CardList from '../components/CardList';
import SliderHome from '../components/SliderHome';
// import axios from 'axios';
import CategoryMovie from '../components/CategoryMovie';

//Css
import '../assets/style/login.scss';
import '../assets/style/style.scss';


const Homepage = (props) => {
    const baca_dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        baca_dispatch(login(userData))
        props.history.push("/review")
    }


    // const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setMovies(await getMovie() )
    //     }
    //     fetchAPI()
    // }, [])



    // const [movies, setMovies] = useState([]);
    
    // useEffect(()=> {
    //     const fetchData = async () => {
    //         const res = await axios
    //             .get("https://be-review-movie.herokuapp.com/api/v1/movie/")
    //             setMovies(res.data.data.Movie)    
    //     } 
    //     fetchData();
    // },[]);

    // const ListMovies = movies.map(item => {
    //     // console.log(item, 'ini dari item')
    //     return (
    //         <CardList
    //             item={item}
    //             title={item.title}
    //             poster={item.poster}
    //             genre={item.genre}
    //         />
    //     )
    // })

    return (
        <Fragment>
            <Container >
                <Navigation
                    handleShow={handleShow}
                />
            </Container>
            <SliderHome />
            <Container>
                <p className="h2 text-left mt-2"><strong> Browser by category </strong></p>
                {/* <div className="text-left mb-5 category">
                    <Link to="">All</Link>
                    <Link to="">Anime</Link>
                    <Link to="">Adventure</Link>
                    <Link to="">Action</Link>
                    <Link to="">Science Fiction</Link>
                    <Link to="">Comedy</Link>
                </div>
                <div>
                    <div className="card-deck mb-3">
                        {ListMovies}
                    </div>
                </div> */}

                <CategoryMovie />

                <div className=" d-flex justify-content-center mt-3">
                    <Pagination >
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </Container>

            {/* SignIn Form */}
            <Modal show={show} onHide={handleClose}>
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
            </Modal>
        </Fragment >

    )
}


export default Homepage;
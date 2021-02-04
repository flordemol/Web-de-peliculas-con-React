import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Row, Col, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { USERNAME, PASSWORD } from './../../constants';

const Login = () => {

    const setInitialState = { username: "", password: "" };
    const [user, setUser] = useState(setInitialState);

    const [message, setMessage] = useState(null);

    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const handlerUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })

    }

    const submitForm = () => {
        const { username, password } = user;
        if (username === USERNAME && password === PASSWORD) {
            history.push("/dashboard");
          }
          setMessage("Usuario o contraseña incorrectos");
    }

    return ( 
        <Row className="justify-content-center vh-100 align-items-center m-0 p-0 backgroundLogin">
            <Col md={4} sm={12}  style={{background:"red", padding:"150px 50px", borderRadius: "4px", backgroundColor: "rgba(0,0,0,.75)"}}>
                <h3>Inicia Sesión</h3>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Form.Group style={{height:"75px"}}>
                        <Form.Control 
                            ref={register}
                            type="text"
                            name="username"
                            onChange={handlerUser}
                            placeholder="Usuario"
                        />
                        <span className="text-danger">{errors.username?.message}</span>
                    </Form.Group>
                    <Form.Group style={{height:"75px"}}>
                        <Form.Control 
                            ref={register}
                            type="password"
                            name="password"
                            onChange={handlerUser}
                            placeholder="********"
                        />
                        <span className="text-danger">{errors.password?.message}</span>
                    </Form.Group>
                    <Button type="submit" variant="info" className="mt-3 w-100">
                        <b>Ingresar</b>
                    </Button>
                    {message}
                </Form>
            </Col>
        </Row>
        );
}
 
export default Login;
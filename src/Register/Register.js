// import Button from '@restart/ui/esm/Button';
// import React, { useState } from 'react';
// import { Col, Container, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';

// const Register = () => {
//     const [loginData, setLoginData]= useState();
//     const {registerUser} = useAuth();
//     const handleOnChange = e =>{
//         const field = e.target.name;
//         const value = e.target.value;

//         const newLoginData ={...loginData};
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//         console.log(newLoginData);
//     }
//     const handleSubmit = e => {
//         if(loginData.password !== loginData.password2){
//             alert('your password did not match!')
//             return;
//         }
//         registerUser(loginData.email, loginData.password)
//         e.preventDefault();
//     }

//     return (
//         <Container className="mx-auto w-50" >
//             <Row >
//                 <Col >
                    
//                     <form onSubmit={handleSubmit} >
//                     <h3>Register</h3>
//                     <InputGroup className="mb-3" style={{width: '100%'}}>
//                         <FormControl
//                         type="email"
//                         placeholder="your email"
//                         aria-label="email"
//                         onBlur={handleOnChange}
//                         aria-describedby="basic-addon1"
//                         />
//                     </InputGroup>
//                     <InputGroup className="mb-3" style={{width: '100%'}}>
                        
//                         <FormControl
//                         type="password"
//                         placeholder="your password"
//                         aria-label="your password"
//                         onBlur={handleOnChange}
//                         name="password"
//                         aria-describedby="basic-addon1"
//                         />
//                     </InputGroup>
//                     <InputGroup className="mb-3" style={{width: '100%'}}>
                        
//                         <FormControl
//                         type="password"
//                         name="password2"
//                         placeholder="Re-type your password"
//                         aria-label="your password2"
//                         onBlur={handleOnChange}
//                         aria-describedby="basic-addon1"
//                         />
//                     </InputGroup>

//                     <Button type="submit" className="d-block w-100 bg-danger rounded text-white my-3 py-2"  >
//                            Register
//                         </Button>
//                     <NavLink to="/login">
//                         <Button variant="secondary" className="text-primary d-block w-100 my-3 btn btn-outline-info">
//                             Already Register ? Please Login
//                         </Button>
//                     </NavLink>
//                     </form>
                    
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Register;
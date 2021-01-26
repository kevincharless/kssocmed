import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

import { HiOutlineMail } from 'react-icons/hi';
import { IoIosLock } from 'react-icons/io';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Row } from '.././../GlobalStyle';
import { Glass, AuthenticationTitle, AuthenticationDescription, AuthenticationRow, InputSection, InputDiv, InputIcon, Input, Button, ButtonGoogle, ButtonText } from './Authentication.elements';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Authentication = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const switchMode = () => {
        setIsSignUp(!isSignUp);
    }

    const googleSuccess = async (res) => {
        console.log(res)
    }
    
    const googleFailure = error => {
        console.log(error);
    }

    return (
        <Row>
            <Glass>
                <AuthenticationTitle>Sign {!isSignUp ? 'In' : 'Up'}</AuthenticationTitle>
                <AuthenticationRow>
                    <AuthenticationDescription>Sign {!isSignUp ? 'In' : 'Up'} and find new friends from all over the world</AuthenticationDescription>
                </AuthenticationRow>
                <InputSection>
                    {isSignUp && (
                        <AuthenticationRow>
                            <InputDiv half> 
                                    <InputIcon half>
                                        <BsFillPersonFill />
                                    </InputIcon>
                                    <Input type="text" name="firstName" placeholder="First Name" half /> 
                            </InputDiv>
                            <InputDiv half> 
                                    <InputIcon half>
                                        <BsFillPersonFill />
                                    </InputIcon>
                                    <Input type="text" name="lastName" placeholder="Last Name" half /> 
                            </InputDiv>
                        </AuthenticationRow>
                    )}
                    <AuthenticationRow>
                        <InputDiv> 
                                <InputIcon>
                                    <HiOutlineMail />
                                </InputIcon>
                                <Input type="email" name="email" placeholder="Email" /> 
                        </InputDiv>
                    </AuthenticationRow>
                    <AuthenticationRow>
                        <InputDiv> 
                                <InputIcon>
                                    <IoIosLock />
                                    {showPassword ? (
                                        <FiEyeOff onClick={handleShowPassword} style={{ cursor: 'pointer' }} />
                                    ) : (
                                        <FiEye onClick={handleShowPassword} style={{ cursor: 'pointer' }} />
                                    )}
                                </InputIcon>
                                <Input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" />        
                        </InputDiv>
                    </AuthenticationRow>
                    {isSignUp && (
                        <AuthenticationRow>
                            <InputDiv> 
                                    <InputIcon>
                                        <IoIosLock />
                                        {showConfirmPassword ? (
                                            <FiEyeOff onClick={handleShowConfirmPassword} style={{ cursor: 'pointer' }} />
                                        ) : (
                                            <FiEye onClick={handleShowConfirmPassword} style={{ cursor: 'pointer' }} />
                                        )}
                                    </InputIcon>
                                    <Input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" /> 
                            </InputDiv>
                        </AuthenticationRow>
                    )}
                </InputSection>
                <AuthenticationRow>
                    <Button>
                        Sign {!isSignUp ? 'In' : 'Up'}
                    </Button>
                </AuthenticationRow>
                <AuthenticationRow>
                    Or Sign {!isSignUp ? 'in' : 'up'} Using
                </AuthenticationRow>
                <AuthenticationRow>
                    <GoogleLogin
                        clientId="287895274227-boanf2kgkn2u65sa8qghuq37a17nljld.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <ButtonGoogle
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                <AiOutlineGoogle style={{ fontSize: '2rem', margin: '0 0.8rem' }} /> Sign {!isSignUp ? 'In' : 'Up'} with Google
                            </ButtonGoogle>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                </AuthenticationRow>
                <AuthenticationRow>
                    {!isSignUp ? 'Don’h have an account ? Please, ' : 'Already have an account ? Please, '}
                    <ButtonText onClick={switchMode}>
                        Sign {isSignUp ? 'In' : 'Up'}
                    </ButtonText>
                </AuthenticationRow>
            </Glass>
        </Row>
    )
}

export default Authentication

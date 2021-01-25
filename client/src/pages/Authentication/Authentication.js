import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosLock } from 'react-icons/io';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

import { Row } from '.././../GlobalStyle';
import { Glass, AuthenticationTitle, AuthenticationDescription, AuthenticationRow, InputSection, InputDiv, InputIcon, Input, Button, ButtonGoogle, ButtonText } from './Authentication.elements';

const Authentication = () => {
    const [isSignUp, setIsSignUo] = useState(false);

    const handleSignUp = () => {
        setIsSignUo(!isSignUp);
    }

    return (
        <Row>
            <Glass>
                <AuthenticationTitle>Sign {!isSignUp ? 'In' : 'Up'}</AuthenticationTitle>
                <AuthenticationRow>
                    <AuthenticationDescription>Sign {!isSignUp ? 'In' : 'Up'} and find new friends from all over the world</AuthenticationDescription>
                </AuthenticationRow>
                <InputSection>
                    <AuthenticationRow>
                        <InputDiv> 
                                <InputIcon>
                                    <BsFillPersonFill />
                                </InputIcon>
                                <Input class="input-field" type="text" placeholder="First Name" half /> 
                        </InputDiv>
                        <InputDiv> 
                                <InputIcon>
                                    <BsFillPersonFill />
                                </InputIcon>
                                <Input class="input-field" type="text" placeholder="Last Name" half /> 
                        </InputDiv>
                    </AuthenticationRow>
                    <AuthenticationRow>
                        <InputDiv> 
                                <InputIcon>
                                    <HiOutlineMail />
                                </InputIcon>
                                <Input class="input-field" type="email" placeholder="Email" /> 
                        </InputDiv>
                    </AuthenticationRow>
                    <AuthenticationRow>
                        <InputDiv> 
                                <InputIcon>
                                    <IoIosLock />
                                </InputIcon>
                                <Input class="input-field" type="password" placeholder="Password" /> 
                        </InputDiv>
                    </AuthenticationRow>
                    {isSignUp && (
                        <AuthenticationRow>
                            <InputDiv> 
                                    <InputIcon>
                                        <IoIosLock />
                                    </InputIcon>
                                    <Input class="input-field" type="password" placeholder="Password" /> 
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
                    <ButtonGoogle>
                        <AiOutlineGoogle style={{ fontSize: '2rem', margin: '0 0.8rem' }} /> Sign {!isSignUp ? 'In' : 'Up'} with Google
                    </ButtonGoogle>
                </AuthenticationRow>
                <AuthenticationRow>
                    {!isSignUp ? 'Don’h have an account ? Please, ' : 'Already have an account ? Please, '}
                    <ButtonText onClick={handleSignUp}>
                        Sign {isSignUp ? 'In' : 'Up'}
                    </ButtonText>
                </AuthenticationRow>
            </Glass>
        </Row>
    )
}

export default Authentication

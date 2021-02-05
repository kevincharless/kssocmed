import React from 'react'
import { ModalDiv, ModalContent, ModalHeader, ModalBody, Title, DangerIcon, Description, ButtonGroup, Button } from './Modal.elements';

import danger from '../../assets/images/danger.svg';

const Modal = ({ isActive, setIsActive, logout }) => {
    return (
        <ModalDiv isActive={isActive}>
            <ModalContent>
                <ModalHeader>
                    <DangerIcon src={danger} />
                    <Title>Are You Sure ?</Title>
                </ModalHeader>
                <ModalBody>
                    <Description>You want to logout ?</Description>
                    <ButtonGroup>
                        <Button onClick={() => setIsActive(false)}>No</Button>
                        <Button onClick={() => logout()}>Yes</Button>
                    </ButtonGroup>
                </ModalBody>
            </ModalContent>
        </ModalDiv>
    )
}

export default Modal

import React from 'react'
import { ModalDiv, ModalContent, ModalHeader, ModalBody, Title, DangerIcon, Description, ButtonGroup, Button } from './Modal.elements';

import danger from '../../assets/images/danger.svg';

const Modal = ({ description, isActive, setIsActive, logout, deleteFunction }) => {
    return (
        <ModalDiv isActive={isActive}>
            <ModalContent>
                <ModalHeader>
                    <DangerIcon src={danger} />
                    <Title>Are You Sure ?</Title>
                </ModalHeader>
                <ModalBody>
                    <Description>{description}</Description>
                    <ButtonGroup>
                        <Button onClick={() => setIsActive(false)}>No</Button>
                        <Button onClick={() => logout ? logout() : deleteFunction() }>Yes</Button>
                    </ButtonGroup>
                </ModalBody>
            </ModalContent>
        </ModalDiv>
    )
}

export default Modal

import React, { useState } from 'react'
import { Modal, ModalHeader } from 'reactstrap';

export default function Popup() {

    const [modal, setModal] = useState(false);


    return (
        <div>
            <Modal
                size='lg'
                isOpen={modal}
                toggle={() => setModal(!modal)}
            >
                <ModalHeader
                    toggle={() => setModal(!modal)}

                >
                    Popup
                </ModalHeader>

            </Modal>

            <button className='btn btn-success m-5' onClick={() => setModal(true)}>
                Open Modal / Popup
            </button>
        </div>
    )
}

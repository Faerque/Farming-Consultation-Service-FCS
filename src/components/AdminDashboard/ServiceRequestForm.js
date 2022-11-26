import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



Modal.setAppElement('#root');

const ServiceRequestForm = ({ modalData, modalIsOpen, closeModal }) => {
    const { userName, userEmail, consultationDescription, consultationImgUrl, consultationName, consultationStatus, consultationRequestTime, userPhone } = modalData;
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div class="grid grid-cols-2 gap-4 place-content-center ">
                    <div>Consultation Name:
                        {consultationName}
                        <div>Consultation Description:
                            {consultationDescription}
                        </div>
                    </div>

                    <div>Information about user:



                    </div>
                    <div>
                        Consultation Image:
                        {consultationImgUrl}</div>
                    <div>04</div>
                </div>
            </Modal>
        </div>
    );
};

export default ServiceRequestForm;
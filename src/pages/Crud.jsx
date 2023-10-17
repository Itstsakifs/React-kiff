import React from "react";
import Case from "../component/case";
import axios from "axios";
import {Table, Modal, Button, ModalBody,Form} from "react-bootstrap";
import { Tab } from "bootstrap";

export default function Crud() {
    const [data, setData] = React.useState(null);
    // making for modal bootstrap
    const [showModal, setShowModal] = React.useState(false);

    const OpenModal = ()=> setShowModal(true);
    const CloseModal= ()=> setShowModal(false);
return (
    <Case>
        <div className="">
            <h4 className="text-2xl">Ini Adalah Page Simple Crud</h4> 
            <div className="row mt-3">
                <div className="col-lg-8">
                    <Form.Control type="text" placeholder="Seacrch"></Form.Control>
                </div>
                <div className="col-lg-4">
                    <Button variant="outline-primary" onClick={OpenModal}>Add</Button>
                </div>
            </div>
            

            
            <Table  bordered className="mt-3">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            </Table>



            <Modal show={showModal} onHide={OpenModal}>
                <Modal.Header>
                    <Modal.Title>Isi Form Tersebut</Modal.Title>
                </Modal.Header>

                <ModalBody>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nama"></Form.Control>
                </ModalBody>

                <Modal.Footer>
                    <Button variant="outline-danger" onClick={CloseModal}>
                        Cancel
                    </Button>{""}
                </Modal.Footer>
            </Modal>

        </div>
    </Case>
    );
}

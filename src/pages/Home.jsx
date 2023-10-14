import React from "react";
import Case from "../component/case";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Home() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Case>
            <div className=" flex justify-center ">
                <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6 ">
                    <h4 className="text-white text-2xl">
                        selamat Datang di React Kif
                    </h4>

                    <div className="">
                        <Button variant="primary" onClick={handleShow}>
                            Buka Modal
                        </Button>
                    </div>

                    <div className="">
                        <Button variant="secondary" className="mt-2">
                        <Link to="/about"><p>TO ABOUT</p></Link>
                        </Button>
                    </div>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Masukan Angka Vote</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Label>Masukan Angka Vote</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Masukan Angka"
                            />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                variant="outline-danger"
                                onClick={handleClose}
                            >
                                {""}
                                Close
                            </Button>
                            <Button
                                variant="outline-primary"
                                className=""
                                onClick={handleClose}
                            >
                                Save
                            </Button>
                            {""}
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </Case>
    );
}

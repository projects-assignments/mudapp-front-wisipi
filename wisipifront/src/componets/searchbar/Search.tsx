import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { TbArrowBigRightFilled } from "react-icons/tb";
import './search.css';

export const SearchBar = () => {
    return (
        <Form className="d-flex flex-column">
            <div className="mb-3" style={{ marginLeft: '65px' }}>
                <Form.Label><strong>Me mudo desde</strong></Form.Label>
                <Form.Control
                    type="search"
                    placeholder="Introduce tu código postal"
                    aria-label="Search"
                />
            </div>

            <div className="mb-3" style={{ marginLeft: '65px' }}>
                <Form.Label><strong>Me mudo a</strong></Form.Label>
                <div className="d-flex align-items-center">
                    <Form.Control
                        type="search"
                        placeholder="Introduce tu dirección"
                        aria-label="Search"
                        className="mb-3"
                    />

                </div>
                <Button variant="outline-success" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', backgroundColor: '#0D6E6E', marginLeft: '65px' }}>
                    <TbArrowBigRightFilled style={{ backgroundColor: '0D6E6E', color: '#fff' }} />
                </Button>
            </div>
        </Form>

    )
}

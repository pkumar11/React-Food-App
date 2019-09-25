import React from 'react';
import Header  from "../components/Header";
import {Link} from 'react-router-dom';

const Default = () => {
    return (
        <Header title="404" styleClass="default-hero">
            <h2 className="text-light text-uppercase">
                You are in the wrong place
            </h2>
            <Link to="/" className="text-uppercase btn bg-orange text-white btn-lg mt-3">
                return home
            </Link>
        </Header>
    );
};

export default Default;
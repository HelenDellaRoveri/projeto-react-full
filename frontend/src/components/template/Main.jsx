import './Main.css';
import React from 'react';
import Header from './Header';


const Main = (props) => (
    <>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </>
);

export default Main;
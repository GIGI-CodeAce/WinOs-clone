import React from 'react';
import Calculator from './Apps/calculator';
import Notes from './Apps/notePad';
import Folder from './Apps/Folder';
import Chrome from './Apps/chrome';

function Apps({ currentApp }) {
    return (
        <>
            {currentApp === 'Notepad' && <Notes />}
            {currentApp === 'Calculator' && <Calculator />}
            {currentApp === 'Folder' && <Folder />}
            {currentApp === 'Chrome' && <Chrome/>}
        </>
    );
}

export default Apps;

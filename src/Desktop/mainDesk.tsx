
import React, { useState } from 'react';
import FinalApp from './Appbuild';
import Apps from '../renderApps';

function Desktop() {
    const [currentApp, setCurrentApp] = useState<string | null>(null);

    const openApp = (appName: string) => {
        setCurrentApp(appName);
    };

    return (
        <main>
            <div className="w-full h-[100vh] bg-cover bg-center grid bg-[url('https://raw.githubusercontent.com/GIGIsOtherStuff/GIGIOSmedia/main/Files/win10.jpg')]" style={{ gridTemplateRows: 'repeat(9, minmax(0, 1fr))' }}>
                <div className="absolute z-10">
                    <Apps currentApp={currentApp} />
                </div>
                <div className="absolute z-0">
                    <FinalApp openApp={openApp} />
                </div>
            </div>
        </main>
    );
}

export { Desktop };

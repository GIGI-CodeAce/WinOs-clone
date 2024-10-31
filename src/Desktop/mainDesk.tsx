
import FinalApp from "./Appbuild";
import Apps from "../renderApps";

function Desktop() {
    return (
        <main>
                        <div className=" w-full h-[100vh] bg-cover bg-center grid bg-[url('https://raw.githubusercontent.com/GIGIsOtherStuff/GIGIOSmedia/main/Files/win10.jpg')]" style={{ gridTemplateRows: "repeat(9, minmax(0, 1fr))" }}>
                <div className="absolute z-10">
                <Apps />
                </div>
                <div className="absolute z-0">
                <FinalApp />
                </div>
            </div>
        </main>
    );
}

export { Desktop };
import AppsInfo from "./appsData";
import App from "./Appbuild";

function Desktop() {
  return (
      <main>
          <div
              className=" w-full h-[100vh] bg-cover bg-center grid
              bg-[url('https://raw.githubusercontent.com/GIGIsOtherStuff/GIGIOSmedia/main/Files/defDesk.jpg')]"
              style={{ gridTemplateRows: "repeat(9, minmax(0, 1fr))" }}
          >
              {AppsInfo.map((item, index) => (
                  <App key={index} name={item.name} img={item.img} index={index} /> // Pass index
              ))}
          </div>
      </main>
  );
}

export { Desktop };
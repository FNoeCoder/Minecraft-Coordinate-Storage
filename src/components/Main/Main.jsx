import "./Main.css";

function Main({ children }) {
    return (
        <main>
            <div className="container-fluid" id="main">
                {children}
            </div>
        </main>
    );
}

export default Main;
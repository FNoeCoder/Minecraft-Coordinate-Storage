import "./Link.css";

function Link({text, classExtra, to}) {
    return (
        <a href={to ? "#"+to : "#"} className={ "a-nav "+(classExtra ? classExtra : "")}>
            {text ? text : "Without text"}
        </a>
    );
}

export default Link;
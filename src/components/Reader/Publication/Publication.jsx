const Publication = ({text, title}) => {
    return (
        <article style={{ fontSize: 12 }}>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    );
};

export default Publication;
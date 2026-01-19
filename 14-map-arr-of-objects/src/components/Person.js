function Person({ lastName, firstNname, email, img }) {
    return (
        <div className="card">
            <img
                src={img}
                alt="img"
            />
            <h3>
                {lastName} {firstNname}
            </h3>
            <h4>{email}</h4>
        </div>
    );
}

export default Person;

function PersonProfile({ id, name, eyes }) {
    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Eye color: {eyes}</p>
        </div>
    );
}

export default PersonProfile;
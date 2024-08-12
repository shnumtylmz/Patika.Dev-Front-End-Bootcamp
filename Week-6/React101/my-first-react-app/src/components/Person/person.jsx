const Person = (props) => {
    return(
        <div className="person">
            <div className="side">
            <img className="person-avatar" src={props.avatar} alt={props.name} />
            <h1 className="person-name">{props.name}</h1>
            </div>
            <div className="info-section">
            <div className="info">
                <h2 className="list-type">Phone Numbers</h2>
                <ul className="list-style-type">
                    {props.phoneNumbers.map((phoneNumberItem) => {
                        return <li key={phoneNumberItem.name}>
                            <span className="list-label">{phoneNumberItem.name}</span>: <span className="list-value">{phoneNumberItem.number}</span>
                        </li>
                    })}
                </ul>
            </div>
            <div className="info">
                <h2 className="list-type">Adresses</h2>
                <ul className="list-style-type">
                    {props.addresses.map((addresses) => {
                        return <li key={addresses.street}>
                            <span className="list-label">{addresses.name}</span>: <span className="list-value">{addresses.street}</span>
                        </li>
                    })}
                </ul>
            </div>
            <div className="info">
                <h2 className="list-type">E-mails</h2>
                <ul className="list-style-type">
                    {props.emails.map((emails) => {
                        return <li key={emails.name}>
                            <span className="list-label">{emails.name}</span>: <span className="list-value">{emails.email}</span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
    )
};

export default Person;
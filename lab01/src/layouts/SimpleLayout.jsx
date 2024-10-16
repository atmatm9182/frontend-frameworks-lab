function SimpleLayout({ children }) {
    return (
        <div>
            <nav>
                <ul>
                    <li>Laboratorium 1</li>
                    <li>Laboratorium 2</li>
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </div>
    );
}

export default SimpleLayout;
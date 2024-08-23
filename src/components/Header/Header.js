function Header() {

    return (
        <>
        <div className="my-2 mx-2">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page"><span className="fw-bold">Dashboard v2</span></li>
                </ol>
            </nav>
        </div>
        </>
    )
}

export default Header;
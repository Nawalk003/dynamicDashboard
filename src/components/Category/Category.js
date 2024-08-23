function Category({category}){
    return (
        <>
        <div><span className="fw-bold">Take it</span></div>
        <div><span className="fw-bold">${category.name}</span></div>
        </>
    )
}

export default Category;
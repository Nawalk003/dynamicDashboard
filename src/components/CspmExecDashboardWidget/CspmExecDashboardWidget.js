function CspmExecDashboardWidget({ widget }) {
    return (
        <>
            <div className="card h-100 m-2">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h6 className="mb-2">{widget.title}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 pb-4 pt-3">
                            <span className="fs-1"><i class="bi bi-pie-chart-fill"></i></span>
                        </div>

                        <div  className="col-6 d-flex align-items-center">
                            <table className="">
                                {Object.entries(widget.data).map(([key, value]) =>
                                    <>
                                        <tr>
                                            <td><span className="text-body flex-1 mb-0">{key} ({value})</span></td>
                                        </tr>
                                    </>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CspmExecDashboardWidget;
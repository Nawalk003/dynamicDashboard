import CspmExecDashboardWidget from "../CspmExecDashboardWidget/CspmExecDashboardWidget";
import WidgetPlaceholder from "../WidgetPlaceholder/WidgetPlaceHolder";

function Category({ category }) {
    return (
        <>
            <div className="m-1 mb-2 px-2 pt-2 pb-4">
                <div className="my-2"><span className="fw-bold">{category.name}</span></div>
                <div className="row">
                    {category.widgets.map((widget) =>
                        <div className="col-4">
                            <CspmExecDashboardWidget widget={widget} />
                        </div>
                    )}
                    <div className="col-4">
                            <WidgetPlaceholder/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Category;
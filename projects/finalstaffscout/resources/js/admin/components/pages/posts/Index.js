import React from "react";
import Breadcrumb from "../../partials/Breadcrumb";

class Index extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <Breadcrumb />

                <section className="content">list categories</section>
            </div>
        );
    }
}

export default Index;

var React = require('react');
var Panel = require('dicty-react-components').Panel;

var ProductView = React.createClass({
    render: function() {
        return (
            <Panel title="Gene Product Information" id="geneproduct" open={true}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="row">
                                    <div className="col-xs-4">
                                        Protein Coding Gene
                                    </div>
                                    <div className="col-xs-8">
                                        DPU0051065
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-4">
                                        Protein  Length
                                    </div>
                                    <div className="col-xs-8">
                                        70 aa
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-4">
                                        Protein Molecular Weight
                                    </div>
                                    <div className="col-xs-8">
                                        7887.4 Da
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-4">
                                        More Protein Data
                                    </div>
                                    <div className="col-xs-8">
                                        <a href="#">Protein sequence, domains and much more ....</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="row">
                                    <div className="col-xs-4">
                                        Genomic Coordinates
                                    </div>
                                    <div className="col-xs-8">
                                        Table
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Panel>
        );
    }

});

module.exports = ProductView;

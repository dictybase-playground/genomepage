var React = require('react');
var Panel = require('dicty-react-components').Panel;

var GeneInfoView = React.createClass({
    render: function() {
        return (
                <Panel title="General Information" id="geneinfo" open={true}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-4">
                                Gene Name
                            </div>
                            <div className="col-xs-8">
                                DPU_G0051604
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                Gene ID
                            </div>
                            <div className="col-xs-8">
                                DPU_G0051604
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                Community Annotations
                            </div>
                            <div className="col-xs-8">
                                <a href="http://wiki.dictybase.org/dictywiki/index.php/DPU_G0051064?action=edit">
                                    Add an annotation for DPU_G0051604
                                </a>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <a href="http://wiki.dictybase.org/dictywiki/index.php/Community_Annotations">
                                    Community Annotations Help
                                </a>
                            </div>
                        </div>
                    </div>
                </Panel>
        );
    }
});

module.exports = GeneInfoView;

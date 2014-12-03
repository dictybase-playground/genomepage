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
                    </div>
                </Panel>
        );
    }
});

module.exports = GeneInfoView;

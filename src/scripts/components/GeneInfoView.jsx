var React = require('react');
var Panel = require('dicty-react-components').Panel;
var SplitRowView = require('./SplitRowView');
var ContainerClass = require('../utils/mixins').ContainerClass;

var GeneName = React.createClass({
    render: function () {
        return (
            <b> Gene Name </b>
        );
    }
});

var GeneInfoView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
                <Panel title="General Information" id="geneinfo" open={true}>
                    <div className={this.getContainerClass()}>
                        <SplitRowView
                            leftColData="Gene Name"
                            rightColData="DPU_G0051604"
                        />
                        <SplitRowView
                            leftColData="Gene ID"
                            rightColData="DPU_G0051604"
                        />
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

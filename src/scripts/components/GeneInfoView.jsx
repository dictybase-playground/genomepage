var React = require('react');
var Panel = require('dicty-react-components').Panel;
var SplitRowView = require('./SplitRowView');
var ContainerClass = require('../utils/mixins').ContainerClass;

var AnnoLink = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-xs-6">
                    <a href="http://wiki.dictybase.org/dictywiki/index.php/DPU_G0051064?action=edit">
                        Add an annotation for DPU_G0051604
                    </a>
                </div>
                <div className="col-xs-6">
                    <a href="http://wiki.dictybase.org/dictywiki/index.php/Community_Annotations">
                        Community Annotations Help
                    </a>
                </div>
            </div>
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
                        <SplitRowView
                            leftColData="Community Annotations"
                            rightColData={<AnnoLink />}
                        />
                    </div>
                </Panel>
        );
    }
});

module.exports = GeneInfoView;

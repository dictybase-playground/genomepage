var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;
var SplitRowView = require('./SplitRowView');
var ProteinView = require('./summary/ProteinView');
var CoordinateView = require('./summary/CoordinateView');



var GeneProductView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
            <Panel title="Gene Product Information" id="geneproduct" open={true}>
                    <div className={this.getContainerClass()}>
                        <SplitRowView
                            leftColSize="7"
                            rightColSize="5"
                            leftColData={<ProteinView {...this.props} />}
                            rightColData={<CoordinateView {...this.props} />}
                        />
                    </div>
            </Panel>
        )
    }

});

module.exports = GeneProductView;

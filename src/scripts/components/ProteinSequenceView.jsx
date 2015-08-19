var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;
var SplitRowView = require('./SplitRowView');

var ProteinSequenceView = React.createClass({
    mixins: [ContainerClass],
    getSequence: function () {
        return (
            <p>
               &gt;DPU1258995 <br/>
                MASLIILSASLFISLLLPISFKETILIIFFLMILFIHLSPYFHINNSGTSSSRLPRRTVP <br/>
                ISPSINKKIN <br/>
            </p>
        );
    },
    render: function() {
        return (
            <Panel title="Protein Sequence" id="proteinsequence" open={true}>
                <div className={this.getContainerClass()}>
                    <SplitRowView
                        leftColData="Protein Sequence"
                        rightColData={this.getSequence()}
                    />
                </div>
            </Panel>
        );
    }
});

module.exports = ProteinSequenceView;

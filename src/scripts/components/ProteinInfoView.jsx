var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;
var SplitRowView = require('./SplitRowView');
var AminoLinkView = require('./protein/AminoLinkView');

var ProteinInfoView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
            <Panel title="General Information" id="proteininfo" open={true}>
                <div className={this.getContainerClass()}>
                    <SplitRowView
                        leftColData="Protein ID"
                        rightColData="DPU1258995"
                    />
                    <SplitRowView
                        leftColData="Protein Length"
                        rightColData="70 aa"
                    />
                    <SplitRowView
                        leftColData="Molecular Weight"
                        rightColData="7887.4 Da"
                    />
                    <SplitRowView
                        leftColData="AA Composition"
                        rightColData={<AminoLinkView />}
                    />
                </div>
            </Panel>
        );
    }
});

module.exports = ProteinInfoView;

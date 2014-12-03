var React = require('react');
var Panel = require('dicty-react-components').Panel;

var SequenceInfoView = React.createClass({
    render: function() {
        return (
            <Panel title="Protein Sequence" id="proteinsequence" open={true}>
            </Panel>
        );
    }
});

module.exports = SequenceInfoView;

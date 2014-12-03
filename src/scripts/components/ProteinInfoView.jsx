var React = require('react');
var Panel = require('dicty-react-components').Panel;

var ProteinInfoView = React.createClass({
    render: function() {
        return (
            <Panel title="General Information" id="proteininfo" open={true}>
                hello
            </Panel>
        );
    }
});

module.exports = ProteinInfoView;

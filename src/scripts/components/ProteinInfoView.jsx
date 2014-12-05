var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;

var ProteinInfoView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
            <Panel title="General Information" id="proteininfo" open={true}>
            </Panel>
        );
    }
});

module.exports = ProteinInfoView;

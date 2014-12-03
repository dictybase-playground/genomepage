var React = require('react');
var Panel = require('dicty-react-components').Panel;

var ProductView = React.createClass({
    render: function() {
        return (
            <Panel title="Gene Product Information" id="geneproduct" open={true}>
            </Panel>
        );
    }

});

module.exports = ProductView;

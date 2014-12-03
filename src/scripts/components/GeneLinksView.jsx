var React = require('react');
var Panel = require('dicty-react-components').Panel;

var GeneLinksView = React.createClass({
    render: function() {
        return (
            <Panel title="Links" id="genelinks" open={true}>
            </Panel>
        );
    }
});

module.exports = GeneLinksView;

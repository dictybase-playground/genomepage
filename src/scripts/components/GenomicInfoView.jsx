var React = require('react');
var Panel = require('dicty-react-components').Panel;

var GenomicInfoView = React.createClass({
    render: function() {
        return (
                <Panel title="Genomic Information" id="geneinfo">
                </Panel>
        );
    }
});

module.exports = GenomicInfoView;

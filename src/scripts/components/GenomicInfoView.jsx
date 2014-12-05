var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;

var GenomicInfoView = React.createClass({
    mixins : [ContainerClass],
    render: function() {
        return (
                <Panel title="Genomic Information" id="geneinfo">
                </Panel>
        );
    }
});

module.exports = GenomicInfoView;

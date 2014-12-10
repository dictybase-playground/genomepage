var ContainerClass = require('../../utils/mixins').ContainerClass;
var SplitRowView = require('../SplitRowView');
var React = require('react');

var CoordinateView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
            <div className={this.getContainerClass()}>
                <SplitRowView
                    leftColData="Genomic Coordinates"
                    rightColData="Table"
                />
            </div>
        );
    }
});

module.exports = CoordinateView;

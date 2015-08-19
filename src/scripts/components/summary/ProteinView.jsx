var React = require('react');
var ContainerClass = require('../../utils/mixins').ContainerClass;
var SplitRowView = require('../SplitRowView');
var ProteinLinkView = require('./ProteinLinkView');

var ProteinView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        var colData = [
            {
                left: "Protein Coding Gene",
                right: "DPU0050065"
            },
            {
                left: "Protein Length",
                right: "70aa"
            },
            {
                left: "Protein Molecular Weight",
                right: "7887.4 Da"
            },
            {
                left: "More Protein Data",
                right: <ProteinLinkView />
            }
        ];
        var items = colData.map(function(element) {
            return (
                <SplitRowView
                    leftColData={element.left}
                    rightColData={element.right}
                />
            );
        })
        return (
            <div className={this.getContainerClass()}>
                {items}
            </div>
        )
    }
});

module.exports = ProteinView;

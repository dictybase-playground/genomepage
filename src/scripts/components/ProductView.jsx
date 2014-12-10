var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;
var SplitRowView = require('./SplitRowView');

var ProteinLinkView = React.createClass({
    render: function() {
        return (
            <a href="#">Protein sequence, domains and much more ....</a>
        );
    }
});

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
})

var ProductView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
            <Panel title="Gene Product Information" id="geneproduct" open={true}>
                    <div className={this.getContainerClass()}>
                        <SplitRowView
                            leftColSize="7"
                            rightColSize="5"
                            leftColData={<ProteinView {...this.props} />}
                            rightColData={<CoordinateView {...this.props} />}
                        />
                    </div>
            </Panel>
        )
    }

});

module.exports = ProductView;

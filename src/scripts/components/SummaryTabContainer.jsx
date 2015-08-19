var React = require('react');
var PanelGroup = require('dicty-react-components').PanelGroup;
var GeneInfoView = require('./GeneInfoView');
var GenomicInfoView = require('./GenomicInfoView');
var GeneProductView = require('./GeneProductView');
var GeneLinksView = require('./GeneLinksView');

var SummaryTabContainer = React.createClass({

    render: function() {
        return (
            <PanelGroup>
                <GeneInfoView {...this.props} />
                <GenomicInfoView {...this.props} />
                <GeneProductView {...this.props} />
                <GeneLinksView {...this.props} />
            </PanelGroup>
        );
    }

});

module.exports = SummaryTabContainer;

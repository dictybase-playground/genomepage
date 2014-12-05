var React = require('react');
var PanelGroup = require('dicty-react-components').PanelGroup;
var GeneInfoView = require('./GeneInfoView');
var GenomicInfoView = require('./GenomicInfoView');
var ProductView = require('./ProductView');
var GeneLinksView = require('./GeneLinksView');

var SummaryTabContainer = React.createClass({

    render: function() {
        return (
            <PanelGroup>
                <GeneInfoView {...this.props} />
                <GenomicInfoView {...this.props} />
                <ProductView {...this.props} />
                <GeneLinksView {...this.props} />
            </PanelGroup>
        );
    }

});

module.exports = SummaryTabContainer;

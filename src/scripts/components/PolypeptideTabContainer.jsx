var React = require('react');
var PanelGroup = require('dicty-react-components').PanelGroup;
var ProteinInfoView = require('./ProteinInfoView');
var ProteinSequenceView = require('./ProteinSequenceView');

var PolypeptideTabContainer = React.createClass({
    render: function() {
        return (
            <PanelGroup>
                <ProteinInfoView />
                <ProteinSequenceView />
            </PanelGroup>
        );
    }
});

module.exports = PolypeptideTabContainer;

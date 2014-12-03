var React = require('react');
var PanelGroup = require('dicty-react-components').PanelGroup;
var ProteinInfoView = require('./ProteinInfoView');
var SequenceInfoView = require('./SequenceInfoView');

var PolypeptideTabContainer = React.createClass({
    render: function() {
        return (
            <PanelGroup>
                <ProteinInfoView />
                <SequenceInfoView />
            </PanelGroup>
        );
    }
});

module.exports = PolypeptideTabContainer;

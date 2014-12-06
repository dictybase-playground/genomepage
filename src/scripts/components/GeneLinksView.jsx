var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;
var SplitRowView = require('./SplitRowView');

var GeneLinksView = React.createClass({
    mixins: [ContainerClass],
    getExternalLink: function () {
        return (
            <a href="http://genome.jgi-psf.org/cgi-bin/dispGeneModel?db=Dicpu1&id=146457">
                JGI_DPUR:146457
            </a>
        )
    },
    render: function() {
        return (
            <Panel title="Links" id="genelinks" open={true}>
                <div className={this.getContainerClass()}>
                    <SplitRowView
                        leftColData="External Resource"
                        rightColData={this.getExternalLink()}
                    />
                </div>
            </Panel>
        );
    }
});

module.exports = GeneLinksView;

var React = require('react');
var Panel = require('dicty-react-components').Panel;

var GeneLinksView = React.createClass({
    render: function() {
        return (
            <Panel title="Links" id="genelinks" open={true}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-4">
                            External Resources
                        </div>
                        <div className="col-xs-8">
                            <a href="http://genome.jgi-psf.org/cgi-bin/dispGeneModel?db=Dicpu1&id=146457">
                                JGI_DPUR:146457
                            </a>
                        </div>
                    </div>
                </div>
            </Panel>
        );
    }
});

module.exports = GeneLinksView;

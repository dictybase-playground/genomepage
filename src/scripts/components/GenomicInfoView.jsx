var React = require('react');
var Panel = require('dicty-react-components').Panel;
var ContainerClass = require('../utils/mixins').ContainerClass;
var SplitRowView = require('./SplitRowView');

var GBrowseImageView = React.createClass({
    render: function() {
        return (
            <p>
                <p> [ Click on the map to browse the genome on from this location ] </p>
                <a href="http://genomes.dictybase.org/browser/gbrowse/purpureum?name=scaffold_1:615..869">
                    <img src="http://genomes.dictybase.org/browser/gbrowse_img/purpureum?q=scaffold_1:615..869;width=400;t=Gene+Genemodel+tRNA+rRNA;b=1"
                        width="490" height="258"
                    />
                </a>
            </p>

        );
    }
})

var GenomicInfoView = React.createClass({
    mixins : [ContainerClass],
    render: function() {
        return (
                <Panel title="Genomic Information" id="genomicinfo" open={true}>
                    <div className={this.getContainerClass()}>
                        <SplitRowView
                            leftColData="Location"
                            rightColData="supercontig DPU0000042 coordinates 636 to 848, Watson strand"
                        />
                        <SplitRowView
                            leftColData="Genomic Map"
                            rightColData={<GBrowseImageView />}
                        />
                    </div>
                </Panel>
        );
    }
});

module.exports = GenomicInfoView;

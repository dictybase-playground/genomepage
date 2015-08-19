var ContainerClass = require('../../utils/mixins').ContainerClass;
var SplitRowView = require('../SplitRowView');
var React = require('react');

var TableView = React.createClass({
    render: function() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th> Exon </th>
                        <th> Local coords. </th>
                        <th> Chrom coords. </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td> 1 - 213 </td>
                        <td> 636 - 848 </td>
                    </tr>
                </tbody>
            </table>
        );
    }
})

var CoordinateView = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
            <div className={this.getContainerClass()}>
                <SplitRowView
                    leftColData="Genomic Coordinates"
                    rightColData={<TableView />}
                />
            </div>
        );
    }
});

module.exports = CoordinateView;

var React = require('react');

var SplitRowView = React.createClass({
    propTypes: {
        leftColSize: React.PropTypes.number,
        rightColSize: React.PropTypes.number,
        leftColData: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.component
        ]).isRequired,
        rightColData: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.component
        ]).isRequired,
        classType: React.PropTypes.oneOf(['xs','sm','md','lg'])
    },
    getDefaultProps: function() {
        return {
            leftColSize: 4,
            rightColSize: 8,
            classType: 'xs'
        };
    },
    render: function() {
        var leftClass = ['col', this.props.classType, this.props.leftColSize].join('-');
        var rightClass = ['col', this.props.classType, this.props.rightColSize].join('-');
        return (
            <div className="row">
                <div className={leftClass}>
                    {this.props.leftColData}
                </div>
                <div className={rightClass}>
                    {this.props.rightColData}
                </div>
            </div>
        );
    }

});

module.exports = SplitRowView;

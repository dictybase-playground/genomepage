var cont = {
    getContainerClass: function () {
        if (this.props.containerClass) {
            return this.props.containerClass;
        }
        return 'container-fluid';
    }
};

module.exports = {
    ContainerClass: cont
};

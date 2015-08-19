var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var Dicty = require('dicty-react-components');
var TabbedArea = Dicty.TabbedArea;
var TabPane = Dicty.TabPane;
var SummaryTabContainer = require('./components/SummaryTabContainer');
var PolypeptideTabContainer = require('./components/PolypeptideTabContainer');
var ContainerClass = require('./utils/mixins').ContainerClass;

require('../styles/main.less');
require('../styles/vendor/bootstrap/dist/js/bootstrap');

var AppContainer = React.createClass({
    mixins: [ContainerClass],
    render: function() {
        return (
            <div className={this.getContainerClass()}>
                <div className="row">
                    <div className="col-xs-12">
                        <h5 className="text-center">Gene Information for DPU_G0051064 </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <TabbedArea>
                            <TabPane to="summary">
                                Gene Summary
                            </TabPane>
                            <TabPane to="polypeptide">
                                Protein Information
                            </TabPane>
                        </TabbedArea>
                        <this.props.activeRouteHandler />
                    </div>
                </div>
            </div>
        );
    }

});

var contClass = 'container-fluid';
var routes = (
    <Routes>
        <Route name="genepage" path="/" handler={AppContainer} containerClass={contClass}>
            <Route name="polypeptide" path="/polypeptide" handler={PolypeptideTabContainer} containerClass={contClass} />
            <Route name="summary" path="/summary" handler={SummaryTabContainer} containerClass={contClass} />
            <DefaultRoute handler={SummaryTabContainer} />
        </Route>
    </Routes>
);

React.render(routes, document.getElementById('content'));

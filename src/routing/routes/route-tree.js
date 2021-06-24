import RouteData from '@jack-henry/web-component-router/lib/route-data.js';
import RouteTreeNode from '@jack-henry/web-component-router/lib/route-tree-node.js';
import MainLayout from '../../components/main-layout/main-layout.js';

// Common

const app = new RouteTreeNode(
  new RouteData('App', 'MY-DEMO', '/', [], false));

const mainLayout = new RouteTreeNode(
  new RouteData('Main', 'MAIN-LAYOUT', '/main', [], true));
app.addChild(mainLayout);

export default app;
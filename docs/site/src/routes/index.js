// @flow weak
/* eslint global-require: "false" */

import React from 'react';
import {
  applyRouterMiddleware,
  hashHistory,
  Router,
} from 'react-router';
import { useScroll } from 'react-router-scroll';
import { kebabCase, titleize } from 'docs/site/src/utils/helpers';
import AppFrame from '../components/AppFrame';
import AppContent from '../components/AppContent';
import MarkdownDocs from '../components/MarkdownDocs';
import Home from '../pages/Home';
import store, { injectReducer } from '../store';

function formatPath(path) {
  return [path, path.replace(/.*\//, '').replace('.md', '')];
}

const demosContext = require.context('../demos', true, /\.md$/);
const demoRoutes = demosContext.keys()
  .map(formatPath)
  .map(([path, name]) => {
    return {
      nav: true,
      path: `/component-demos/${name}`,
      title: titleize(name),
      component: MarkdownDocs,
      content: demosContext(path),
    };
  });

const docsContext = require.context(
  './../../../../docs',
  true,
  /^((?![\\/]site\/src\/demos|node_modules[\\/]).)*\.md$/,
);

const apiDocRoutes = docsContext.keys()
  .filter((n) => /^\.\/api\//.test(n))
  .map(formatPath)
  .map(([path, name]) => {
    return {
      nav: true,
      path: `/component-api/${kebabCase(name)}`,
      title: name,
      component: MarkdownDocs,
      content: docsContext(path),
    };
  });

const routes = {
  path: '/',
  title: 'Material Charts',
  component: AppFrame,
  indexRoute: {
    title: null,
    component: Home,
    dockDrawer: true,
  },
  childRoutes: [
    {
      nav: true,
      path: '/getting-started',
      title: 'Getting Started',
      component: AppContent,
      indexRoute: {
        onEnter(nextState, replace) {
          replace('/getting-started/installation');
        },
      },
      childRoutes: [
        {
          nav: true,
          path: '/getting-started/installation',
          title: 'Installation',
          component: MarkdownDocs,
          content: docsContext('./getting-started/installation.md'),
        },
        {
          nav: true,
          path: '/getting-started/usage',
          title: 'Usage',
          component: MarkdownDocs,
          content: docsContext('./getting-started/usage.md'),
        },
        {
          nav: true,
          path: '/getting-started/server-rendering',
          title: 'Server Rendering',
          component: MarkdownDocs,
          content: docsContext('./getting-started/server-rendering.md'),
        },
      ],
    },
    {
      nav: true,
      path: '/customization',
      title: 'Customization',
      component: AppContent,
      indexRoute: {
        onEnter(nextState, replace) {
          replace('/customization/themes');
        },
      },
      childRoutes: [
        {
          nav: true,
          path: '/customization/themes',
          title: 'Themes',
          component: MarkdownDocs,
          content: docsContext('./customization/themes.md'),
        },
        {
          nav: true,
          path: '/customization/composition',
          title: 'Composition',
          component: MarkdownDocs,
          content: docsContext('./customization/composition.md'),
        },
      ],
    },
    {
      nav: true,
      path: '/component-demos',
      title: 'Component Demos',
      component: AppContent,
      childRoutes: demoRoutes,
    },
    {
      nav: true,
      path: '/component-api',
      title: 'Component API',
      component: AppContent,
      childRoutes: apiDocRoutes,
    },
    {
      nav: true,
      path: '/examples',
      title: 'Examples',
      component: AppContent,
      indexRoute: {
        onEnter(nextState, replace) {
          replace('/examples/bar-charts');
        },
      },
      childRoutes: [
        require('./examples/barCharts').default(store, injectReducer),
      ],
    },
  ],
};

export default function AppRouter() {
  return (
    <Router
      history={hashHistory}
      render={applyRouterMiddleware(useScroll())}
      routes={routes}
    />
  );
}

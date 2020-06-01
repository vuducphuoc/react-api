import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFound';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductAction from './pages/ProductActionPage/ProductAction';

export const menus = [
    { name: 'Trang chủ', to: '/', exact: true },
    { name: 'Danh sách sản phẩm', to: '/product-list', exact: true },
];

export const routes = [
    { path: '/', exact: true, component: () => <HomePage /> },
    { path: '/product-list', exact: false, component: () => <ProductListPage /> },
    { path: '/product/add', exact: false, component: ({ history }) => <ProductAction history={history} /> },
    { path: '/product/:id/edit', exact: false, component: ({ match, history }) => <ProductAction match={match} history={history} /> },
    { path: '', exact: false, component: () => <NotFound /> }
];
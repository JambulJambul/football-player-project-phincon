import MainLayout from '@layouts/MainLayout';
import AdminLayout from '@layouts/AdminLayout';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import NotFound from '@pages/NotFound';
import AdminHome from '@pages/AdminHome';
import CreatePlayer from '@pages/CreatePlayer';
import PlayerList from '@pages/PlayerList';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    layout: MainLayout,
  },
  {
    path: '/admin',
    name: 'Admin Home',
    protected: true,
    component: AdminHome,
    layout: AdminLayout,
    isAdmin: true
  },
  {
    path: '/admin/create-player',
    name: 'Create Player',
    protected: true,
    component: CreatePlayer,
    layout: AdminLayout,
    isAdmin: true
  },
  {
    path: '/admin/player-list',
    name: 'Player List',
    protected: true,
    component: PlayerList,
    layout: AdminLayout,
    isAdmin: true
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;

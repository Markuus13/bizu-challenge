import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Auth from '@/components/Auth';
import Profile from '@/components/Profile';
import Repositories from '@/components/Repositories';
import Repository from '@/components/Repository';
import IssueForm from '@/components/IssueForm';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: Repositories,
    },
    {
      path: '/repository/:full_name',
      name: 'Repository',
      component: Repository,
      props: true,
    },
    {
      path: '/repository/:full_name/issues/new',
      name: 'IssueForm',
      component: IssueForm,
      props: true,
    },
  ],
});

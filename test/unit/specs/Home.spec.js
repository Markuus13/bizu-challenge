import Vue from 'vue';
import Home from '@/components/Home';

describe('Home.vue', () => {
  it('renders correct contents', () => {
    const vm = new Vue(Home).$mount();
    const authButton = vm.$el.querySelector('.auth-button').textContent;
    expect(authButton).to.equal('Authenticate');
  });
});

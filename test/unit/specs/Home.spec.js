import Vue from 'vue';
import Home from '@/components/Home';

describe('Home.vue', () => {
  it('renders correct contents', () => {
    const vm = new Vue(Home).$mount();
    const description = vm.$el.querySelector('#description').textContent;
    const auth = vm.$el.querySelector('#github-auth').textContent;
    expect(description).to.equal('Descrição');
    expect(auth).to.equal('Autenticar');
  });
});

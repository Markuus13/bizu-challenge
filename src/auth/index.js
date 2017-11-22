import axios from 'axios';

const SCOPE = 'user,repo';
const CLIENT_ID = '3c854ec250d614af9d69';

export default {
  user: {
    authenticated: false,
  },

  signIn() {
    window.location.href = `https://github.com/login/oauth/authorize?scope=${SCOPE}&client_id=${CLIENT_ID}`;
  },

  authenticate(context, code, redirect) {
    axios.get(`http://localhost:9090/authenticate/${code}`)
     .then((result) => {
       if (result.data.error) {
         notifyError(context);
         context.$router.push('/');
         return;
       }

       localStorage.setItem('access_token', result.data.token);
       this.user.authenticated = true;
       notifySuccess(context);

       if (redirect) {
         context.$router.push(redirect);
       }
     });
  },

  signOut(context) {
    localStorage.removeItem('access_token');
    this.user.authenticated = false;
    context.$router.push('/');
  },

  checkAuth() {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this.user.authenticated = true;
    } else {
      this.user.authenticated = false;
    }
  },

  getAuthHeader() {
    return {
      Authorization: `token ${localStorage.getItem('access_token')}`,
    };
  },
};

function notifyError(context) {
  context.$notify.error({
    title: 'Authentication failed!',
    message: 'Invalid code :(',
  });
}

function notifySuccess(context) {
  context.$notify.success({
    title: 'Authenticated with success!',
    message: 'Enjoy :)',
  });
}

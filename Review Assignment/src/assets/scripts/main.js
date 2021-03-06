$(document).ready(function () {
  var logInPage = window.logIn().initialize();
  var common = window.common();

  window.addEventListener('popstate', function(e) {
    if (e.state != null) {
       $('#main-content').empty();
      switch(e.state.historyKey) {
        case 'friends':
          window.friends().initialize();
          break;
        case 'loginPage':
          logInPage;
          break;
        case 'timeLine':
          window.timeline().initialize();
          break;
        case 'photos':
          window.photos().initialize();
          break;
        case 'aboutInfo':
          window.about().initialize();
          break;
      }
    }
  });

  logInPage;
  common.historyManager('loginPage');
});

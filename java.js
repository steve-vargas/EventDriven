(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiWT1a0iFy8GFag_buHHgFIzme_S1yHwk",
    authDomain: "eventdriven-aadde.firebaseapp.com",
    databaseURL: "https://eventdriven-aadde.firebaseio.com",
    projectId: "eventdriven-aadde",
    storageBucket: "eventdriven-aadde.appspot.com",
    
  };
  firebase.initializeApp(config);


  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

    btnSignUp.addEventListener('click',e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    });
        btnLogout.addEventListener('click', e => {
            firebase.auth().signOut();
        });

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                console.log(firebaseUser);
                btnLogout.classList.remove('hide');
            }   else {
                console.log('not logged in');
                btnLogout.classList.add('hide');
            }
        });

}());

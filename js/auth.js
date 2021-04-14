// Listen for auth state

auth.onAuthStateChanged(user => {
    if(user) {
        // This stuff happens when user is logged in
        // Get Data From  Database

    db.collection('imgpath').get().then(snapshot => {
        setupGallery(snapshot.docs);
});
        console.log('user has logged in', user);
    } else {
        // This stuff happens when user is logged out
        setupGallery([]);
        console.log ('user has logged out', user);
    }
});

// Sign Up

const signup = document.querySelector('#sign-up-form');
signup.addEventListener('submit', (e) => {
e.preventDefault();

// User Info

const email = signup['sign-up-email'].value;
const password = signup['sign-up-password'].value;

// Sign up user

auth.createUserWithEmailAndPassword(email, password).then(cred => {
    signup.style.display = "none";
} );


// Logout

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
});


} );



// Login 

const login = document.querySelector('#sign-in-form');

login.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = login['login-email'].value;
    const password = login['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        login.style.display = "none";
        console.log('user logged in');
    });
})

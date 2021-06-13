var push = require('web-push');

let vapidKeys = {
    publicKey: 'BCa7G4Kb50jlas5ccmVuNH-9jgrMBh_pyTjox4dgTQlCyuHArZRNc9_RQBFY8ENc0C1OboPJHet01t_pvQaTTyk',
    privateKey: 'OCjBKnG1kj5LLZWlKUu0TSAsOK42lj4eizkp6GPGmro'
  };


push.setVapidDetails(
    "mailto:test@code,co.uk", 
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

let sub = {
    endpoint:
        "https://par02p.notify.windows.com/w/?token=BQYAAAAVGzfPAcrtm8K0Eh5yKXS1xaQIHDhceNv3QxZ%2fg5gBvyQbTGlHrHl02NO7ULiesNYBEqNMGbZ3PN1qHHKj5Ch8AFGEJtJM6y1yl2vIt6X5Ud3X8wl8YxxrW%2bPEslZ9Jabf%2boDbp8blGi1jbSpzVX43CogmewCQd0cEDypkNgznfZGvvS4IhDtumGGjr496pJCRDOweRfGjLpJfmalIsVHg6StRFl9TVQdT0sVWSnEnxwVCa6D61SRp%2fcgf7LAEJ%2f%2fZDkQV1b5xvGkmOcRYXHaSsbPlPQBPwejEypLrzbiEe2NJdBVantM2l%2bR2oSYWp81vUOhT82vVTkd87C0L4nW5fSajFSpsqXVpnJiWYBBQvA%3d%3d",
    expirationTime:null,
    keys:{
        p256dh:
            "BB5mTKgb08LFEViiPNiEEcLrzfg6uquLSyXI3DdRJ1_Zd7d7oOPO6ns_ClURYGCI8NQHrwgmvidUNrT7XzJiiTg",
        auth:"nC3zMCV9KAGIB0azaA4-0w"
    }
}

push.sendNotification(sub, 'test message');
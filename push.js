var push = require('web-push');

let vapidKeys = {
    publicKey: 'BCa7G4Kb50jlas5ccmVuNH-9jgrMBh_pyTjox4dgTQlCyuHArZRNc9_RQBFY8ENc0C1OboPJHet01t_pvQaTTyk',
    privateKey: 'OCjBKnG1kj5LLZWlKUu0TSAsOK42lj4eizkp6GPGmro'
  };


push.setVapidDetails("mailto:test@code,co.uk", vapidKeys.privateKey,vapidKeys.privateKey);

let sub = {}

push.sendNotification(sub, 'test message');
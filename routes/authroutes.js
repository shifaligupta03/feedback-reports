const passport = require('passport');

module.exports=(app)=>{
    app.get('/auth/google', passport.authenticate('google',{
        scope:['profile','email']
    }));
    
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res)=>{
            res.redirect('/surveys');
        });

    app.get('/api/logout', (req, res)=>{
        req.logout();
        res.redirect('/');
    })

    app.get('/api/hello', (req, res)=>{
        res.send({'hi':'hello'});
    })
    app.get('/api/checkUser', (req, res)=>{
        res.send(req.user);
    })
       
}


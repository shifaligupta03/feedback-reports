const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('Surveys');

module.exports = app=>{
    app.post('/api/surveys', requireLogin, requireCredits, async (req,res)=>{
        const { title, subject, body, recipients} = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email=> ({ email })),
            _user : req.user.id,
            dateSent: Date.now()
        });

        try{
            const mailer = new Mailer(survey, surveyTemplate(survey));
            await mailer.send(); 
            await survey.save();
            req.user.credits -=1;
            const user =await req.user.save();
            req.send(user);
        } catch(err){
            req.status(422).send(err);

        }
        
    });
}
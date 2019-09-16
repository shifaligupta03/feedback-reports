module.exports =(survey)=>{
    return `
       <html>
        <body>
            <div style="text-align:center;">
            <p>Please answer the following questions</p>
            <p>${survey.body}</p>
            <div>
                <a href="">Yes</a>
            </div>
            <div>
                <a href="">No</a>
            </div>
        </body
       </html> 
    `
};
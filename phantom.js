/**
 * Created by tavete on 04/10/16.
 */

var webPage = require('webpage');
var page = webPage.create();
page.viewportSize = { width: 1024, height : 768 };

page.open('about:blank', function(status){
    page.content = '<html><body style="background-color: #FFF;"><div>hello phantom!</div></body></html>';
    if(status == "success") {
        console.log(page.url);
        console.log(page.content);
        setTimeout(function(){
            page.render('prueba.jpg');
            page.close();
            phantom.exit();
        }, 10000);

    }
})
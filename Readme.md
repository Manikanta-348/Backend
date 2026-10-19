started learning backend   
what is node js  
how can we use module.exports and exports.variable in files  
how can we use module.exports in directories  
What is npm and how to use the packages eg:figlet  
Local installation vs global installation (to install globally we need to get admin access so we use :- sudo chown -R $USER/usr/local/lib/node_modules) for global installation we need to use [npm install -g <package name> and to link the package we need to use npm link <packagename>]  
what is an import (ES6) module import is used instead of require to save the memory but we need to use the keyword export before importing and we need to add the "type" : "module" in package-json  
what is express? express is a framework used for server side programming it can handle routes and building web applications  
installed the express modules in the express directory and acquired the properties using the require('express') and assigned to an variable app and set up port by let port = 3000 or 8080 and started running the first server using app.listen(port,()=>console.log('port is running'))  
completed learning the app.use function but i dont know why i used it i should learn about the internet to further proceed  
used app.use to send the response using function res.send and we can send any type like string,object,html  
learned about the routing it explains how the webpages are connected each other through app.get() and similarily app.post() but faced a problem restarting server many times but it is solved using the nodemon which automatically restarts the server when any changes detected  
path parameters which are used for accessing different paths by adding variables to the routes "/:username" through this we can access any username and send the name in response the names are stored in req.params it can be accessed the username  
learned about the query strings which means if we visit any platform and search for something it displays in the url like search?q=apple the q refers to query string this can be accessed by req.query and through app.get("/search") if anything is not searched we can use if(!q) for sending nothing searched response  
EJS  
ejs is an template engine which allows to render html pages and learned about path.join it is used because when we try to access the code from the main folder then we can get error rendering pages because the express searches for the views folder in it so we require a path function and we use the app.set("views",path.join(__dirname,"/views)) so it can fetch even when we run from main folder
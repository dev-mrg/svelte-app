import jQuery from 'jquery';
// const j$ = jQuery;
let route = [];

export function routes(){
    console.log(location.hash)
    let openChild;
    let open = $(this).attr("href");
    let myState = history.pushState(open, "fuck",'http://localhost:5000');
    route.push(open)
    console.log(history.state)
    console.log(history.go(-2))
      $('.page').hide();
      $('.child').hide();
       $(open).show();
      $('.tab').css('z-index','3');
      $(this).css('z-index','10');
      setTimeout(budge,1000);
      function budge() {
          console.log(history.go(-2))
          console.log(window.history.state);
          var hash = window.location.hash.substr(1).replace(/(\?.*)$/, "");
          return console.log(trimSlashes(hash))
     
  

      }
console.log(route)
}

var back = window.history.back;

window.history.back = function() {
    console.log("location: " + document.location + ", state: " + 
        JSON.stringify(window.history.state));

    return back.apply(this, arguments);
}


function parseRouteRule(route) {
    if (typeof route !== "string") {
        return route;
    }
    var uri = trimSlashes(route);
    var rule = uri
        .replace(/([\\\/\-\_\.])/g, "\\$1")
        .replace(/\{[a-zA-Z]+\}/g, "(:any)")
        .replace(/\:any/g, "[\\w\\-\\_\\.]+")
        .replace(/\:word/g, "[a-zA-Z]+")
        .replace(/\:num/g, "\\d+");

    return console.log(new RegExp("^" + rule + "$", "i"));
};


const trimSlashes = function (path) {
    if (typeof path !== "string") {
        return "";
    }

   
    return path.toString().replace(/\/$/, "").replace(/^\//, "");
};


export function childRoute(){
    let open = $(this).attr("href");
    $('.child').hide();
     $(open).show();
}
 function background(){
    const app = $('#app');
       const dark = $('#dark');
           app.toggle(100);
           dark.toggle(100);
  }







// // List of supported routes. Any url other than these routes will throw a 404 error
// const routes = {
//     '/'             : Home
//     , '/about'      : About
//     , '/p/:id'      : PostShow
//     , '/register'   : Register
// };


// // The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
// const router = async () => {

//     // Lazy load view element:
//     const content = null || document.getElementById('page_container');

//     // Get the parsed URl from the addressbar
//     let request = Utils.parseRequestURL()

//     // Parse the URL and if it has an id part, change it with the string ":id"
//     let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

//     // Get the page from our hash of supported routes.
//     // If the parsed URL is not in our list of supported routes, select the 404 page instead
//     let page = routes[parsedURL] ? routes[parsedURL] : Error404
//     content.innerHTML = await page.render();
//     await page.after_render();

// }

// // Listen on hash change:
// window.addEventListener('hashchange', router);

// // Listen on page load:
// window.addEventListener('load', router);




//   parseRequestURL : () => {

//     let url = location.hash.slice(1).toLowerCase() || '/';
//     let r = url.split("/")
//     let request = {
//         resource    : null,
//         id          : null,
//         verb        : null
//     }
//     request.resource    = r[1]
//     request.id          = r[2]
//     request.verb        = r[3]

//     return request
// }

// window.onpopstate = () => {
//     contentDiv.innerHTML = routes[window.location.pathname];
//   }
import jQuery from 'jquery';
let route = [];

window.onload = route.splice(0,route.length);

export function routes(){
    // console.log(location.hash)
    let open = $(this).attr("href");
    history.pushState(open, "",open);
    route.push(open)
      $('.page').hide();
      $('.child').hide();
      $(open).show();
 
      setTimeout(budge,1000);
      function budge() {
          console.log("So What?")
      }
// console.log(route)
}

export function childRoute(){
    let open = $(this).attr("href");
    $('.child').hide();
     $(open).show();
}

export function back(){
    let length = route.length-1;
    let newroute = route.splice(-1);
    let open = newroute.toString();
    route = route.slice(0,length);
    goback()
  function goback(){ 
        location.hash = open;
        $('.page').hide();
        $('.child').hide();
        $(open).show();

    }
} 



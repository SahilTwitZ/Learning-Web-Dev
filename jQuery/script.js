// $("h1").css("color","green");

// $("h2").css("font-size","4rem");

// console.log($("button"));

// console.log($("button").css("color"));

// $("h1").addClass("big-title add-padding");

// $("button").addClass("colourful-buttons");

// console.log($("h2").hasClass("add-padding"));
// console.log($("h1").hasClass("add-padding"));

// $("h2").text("Very Very Thank You John!")

// $("button").html("<b>Click here")

//manipulating attributes with jQuery
// $("a").text("Snapchat")
// $("a").attr("href", "https://www.snapchat.com")

// console.log($("h2").attr("class"));

//adding eventlistener with jQuery
// $("button").click(function(){
//     $("h1").css("color","green");
// });

// $("input").keypress(function (e) { 
//     console.log(e.key);
// });

// $("input").keypress(function (e) { 
//     $("h1").text(e.key);
// });

// $("h2").on("mouseover", function(){
//     $("h2").css("color","purple");
// });

//adding and removing elements with jQuery
// //just before h1
// $("h1").before("<button>New</button>")
// //just after h1
// $("h1").after("<button>New</button>")
// //just before the content of the h1
// $("h1").prepend("<button>New</button>")
// //just after the content of h1
// $("h1").append("<button>New</button>")

// $("button").remove();

//adding animations with jQuery
// $("button").on("click", function(){
//     $("h1").hide();
// });

// $("h1").show();

// $("button").on("click", function(){
//     $("h1").toggle();
// });

// $("button").on("click", function(){
//     $("h1").fadeOut();
// });

// $("button").on("click", function(){
//     $("h1").fadeIn();
// });

// $("button").on("click", function(){
//     $("h1").fadeToggle();
// });

// $("button").on("click", function(){
//     $("h1").slideUp();
// });

// $("button").on("click", function(){
//     $("h1").slideToggle();
// });

// $("button").on("click", function(){
//     $("h1").animate({
//         //only add css rules that have nunmeric value
//         // opacity:0.5
//         // margin: "20%"
         
//     });
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

git
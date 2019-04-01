//Implement Vue in an HTML page using the CDN link. (find this on the Vue.js Installation Guide)
//On a linked JavaScript page, use the data property to create 10 facts about llamas. (How I've missed the llamas!) Example :


//Target a div on your page with the el propety. Then on your html page, create a list of facts using the double curly brackets to bind the data from the javascript into the html.

    //Additionally, use v-if to conditionally display or hide one of your facts. You do not need to worry about including an event to change the condition. I just want to see that you can do it.

//New instance of Vue class
new Vue({
    el: "#app",
    data:{
        llamaGrooming: "When shaving llama fur, you cannot shave the fur on their heads. If you do they freak out. This results in them looking like large llama poodles.",
        avgAge: 22,
        booLayEggs: false,
        booSleepStandingUp: true,
        topSpeed: 132,
        topSpeedUnit: "kmph",
        favFoods: [ "wheatgrass", "lemongrass", "sweetgrass", "hot wings"],
        avgBabyCount: 3,
        avgHeight: 2,
        avgHeightUnit: "meters",
        avgWeight: 105,
        avgWeightUnit: "kilos",
        furColors: ["brown", "black", "white", "cookies and creme", "champagne llama"],
        ism: "Ain't no drama like a llama's drama."
    }
});



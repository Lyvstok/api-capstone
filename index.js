function renderFoursquare(response){

  const resultsHtml = response.response.groups[0].items.map(function(item){
    console.log(item);
    console.log("==========================");
    return `<div class="results" role="results of the search.">
    
      <h2><a href="${item.venue.url}">${item.venue.name}</a></h2>
      <p>Rating: <span style="color: white;">${item.venue.rating}</span></p>
      <address>Address: <span style="color: white;">${item.venue.location.address}</span></address>
      <br/>
      
    </div>`
  }).join("")
  console.log(resultsHtml);
  $(".outPut").empty().html(resultsHtml);
}
$(".form").submit(function(event){
    event.preventDefault();
    console.log("button works");
    const where = $(".submit1").val();
    const whatDrink = $(".submit3").val();
    console.log(where,whatDrink);
    
    $.ajax({
      url: "https://api.foursquare.com/v2/venues/explore",
      data: {
          client_id: '0HM21HQ3BXFSMDTSQT2ZBKG5XRCKTR4D5YT1BVIUCGXSKVAM',
          client_secret: 'IKKMQ1BUJUOQ23SQI5VK1305LRRGM4YX3HEWIZT00IG10CQY',
          near: where,
          radius: 2500,
          query: whatDrink,
          v: '20170801',
          limit: 10
  },
      success: renderFoursquare,
    })
});

////////////////////////////////////////////////////

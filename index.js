var pexAuth = "0wpgcXTETGzhvupxmdGpJvp47P3yNwDBvGOhJOwEBBWrVpkPaY5ZiVcA"
var pexURL = "https://api.pexels.com/v1/curated"
var headerParams = { "Authorization": pexAuth };
var pexAJAX = {
    url: pexURL,
    headers: headerParams,
    success: getData,
}

$.ajax (pexAJAX)
function getData(data) {
    var pexPhotoData = data.photos;
    console.log(pexPhotoData);
    for (var photo of pexPhotoData) {
        $("#container").append(`
            <div class="photo-container">
                <img src="${photo.src.large}" />
            </div>
        `);
    }
}

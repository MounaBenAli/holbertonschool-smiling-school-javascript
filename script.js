$(document).ready(function(){
 //   Quotes ===============================================================
	$(function displayQuotes() {
			$.ajax({
				method:'GET',
				url: 'https://smileschool-api.hbtn.info/quotes',
				dataType: 'json'
			}).done(function renderHTML(response){
				$.map(response, function(){
					response.forEach(element => {
						let id = ''
						if (element.id === 1) {
							id = 'active'
						}
						$('#carousel-quotes').append(`
							<div class="carousel-item ${id}">
								<div class="row">
									<div class="col-sm-4">
										<img class="img_1 d-block w-25 rounded-circle" src="${element.pic_url}" alt="First slide">
									</div>
									<div class="col-sm-8">
										<p>${element.text}</p>
										<h6 class="">${element.name}</h6>
										<cite>${element.title}</cite>
									</div>
								</div>
							</div>
						`);

					});
				});
			});
	});

 //   Tutorials ===============================================================
 $(function displayTutorials() {
	$.ajax({
		method:'GET',
		url: 'https://smileschool-api.hbtn.info/popular-tutorials',
		dataType: 'json'
	}).done(function renderHTML(response){
		$.map(response, function(){
			response.forEach(element => {
				let active_id = ''
				if (element.id > 1) {
					for(let i = 0; i < response.length; i++){
						response[i] += active_id[i] 
						active_id = 'active' 
					}
				
				}
				$('#vid-loader').append(`
		<div class="carousel-item ${active_id}">
            <div class="row d-flex"> 
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="border-success mb-3 rounded-top">
                            <div class="thumbnail ">
                                <img class="d-block w-100 " src="${element.thumb_url}" alt="">
                                <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${element.title}</h5>
                                <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                <div class="testemonial d-flex align-items-center">
                                    <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                    <h6 class="phillip  pl-2 m-0">${element.author}</h6>
                                </div>
                                <div class="stars py-2 d-flex justify-content-between">
                                <div>
                                    <img src="images/star_on.png" width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_off.png"  width="15px"alt="">
                                </div>
                                <span><h6 class="vid-length"> ${element.duration}</h6></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="border-success mb-3 rounded-top h-auto" >
                            <div class="thumbnail ">
                                <img class="d-block w-100 " src="${element.thumb_url}" alt="First slide">
                                <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Sad Smile</h5>
                                <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                <div class="testemonial d-flex align-items-center">
                                    <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                    <h6 class="phillip pl-2 m-0">${element.author}</h6>
                                </div>
                                <div class="stars py-2 d-flex justify-content-between">
                                <div>
                                    <img src="images/star_on.png" width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_off.png"  width="15px"alt="">
                                </div>
                                <span><h6 class="vid-length"> ${element.duration}</h6></span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                            <div class="border-success mb-3 rounded-top h-auto">
                                <div class="thumbnail ">
                                    <img class="d-block w-100 " src="${element.thumb_url}" alt="First slide">
                                    <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Natural Smile</h5>
                                    <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                    <div class="testemonial d-flex align-items-center">
                                        <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                        <h6 class="phillip pl-2 m-0">${element.author}</h6>
                                    </div>
                                    <div class="stars py-2 d-flex justify-content-between">
                                    <div>
                                        <img src="images/star_on.png" width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_off.png"  width="15px"alt="">
                                    </div>
                                    <span><h6 class="vid-length"> ${element.duration}</h6></span>
                                    </div>
                                </div>
                              </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="border-success mb-3 rounded-top h-auto" >
                                <div class="thumbnail ">
                                    <img class="d-block w-100 " src="${element.thumb_url}" alt="First slide">
                                    <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Happy Smile</h5>
                                    <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                    <div class="testemonial d-flex align-items-center">
                                        <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                        <h6 class="phillip pl-2 m-0">${element.author}</h6>
                                    </div>
                                    <div class="stars py-2 d-flex justify-content-between">
                                    <div>
                                        <img src="images/star_on.png" width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_off.png"  width="15px"alt="">
                                    </div>
                                    <span><h6 class="vid-length"> ${element.duration}</h6></span>
                                  </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
				`);
			});
		});
	});
	});

 //   Latest_Videos ===============================================================
 $(function displayVideos() {
	$.ajax({
		method:'GET',
		url: 'https://smileschool-api.hbtn.info/latest-videos',
		dataType: 'json'
	}).done(function renderHTML(response){
		$.map(response, function(){
			response.forEach(element => {
				let act_id = ''
				if (element.id > 3) {
					for(let ii = 0; ii < response.length; ii++){
						response[ii] += act_id[ii] 
						act_id = 'active' 
					}
				}
				$('#latest-vid-loader').append(`
		<div class="carousel-item ${act_id}">
            <div class="row d-flex"> 
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="border-success mb-3 rounded-top">
                            <div class="thumbnail ">
                                <img class="d-block w-100 " src="${element.thumb_url}" alt="">
                                <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${element.title}</h5>
                                <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                <div class="testemonial d-flex align-items-center">
                                    <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                    <h6 class="phillip  pl-2 m-0">${element.author}</h6>
                                </div>
                                <div class="stars py-2 d-flex justify-content-between">
                                <div>
                                    <img src="images/star_on.png" width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_off.png"  width="15px"alt="">
                                </div>
                                <span><h6 class="vid-length"> ${element.duration}</h6></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="border-success mb-3 rounded-top h-auto" >
                            <div class="thumbnail ">
                                <img class="d-block w-100 " src="${element.thumb_url}" alt="First slide">
                                <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Sad Smile</h5>
                                <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                <div class="testemonial d-flex align-items-center">
                                    <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                    <h6 class="phillip pl-2 m-0">${element.author}</h6>
                                </div>
                                <div class="stars py-2 d-flex justify-content-between">
                                <div>
                                    <img src="images/star_on.png" width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_on.png"  width="15px" alt="">
                                    <img src="images/star_off.png"  width="15px"alt="">
                                </div>
                                <span><h6 class="vid-length"> ${element.duration}</h6></span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                            <div class="border-success mb-3 rounded-top h-auto">
                                <div class="thumbnail ">
                                    <img class="d-block w-100 " src="${element.thumb_url}" alt="First slide">
                                    <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Natural Smile</h5>
                                    <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                    <div class="testemonial d-flex align-items-center">
                                        <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                        <h6 class="phillip pl-2 m-0">${element.author}</h6>
                                    </div>
                                    <div class="stars py-2 d-flex justify-content-between">
                                    <div>
                                        <img src="images/star_on.png" width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_off.png"  width="15px"alt="">
                                    </div>
                                    <span><h6 class="vid-length"> ${element.duration}</h6></span>
                                    </div>
                                </div>
                              </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="border-success mb-3 rounded-top h-auto" >
                                <div class="thumbnail ">
                                    <img class="d-block w-100 " src="${element.thumb_url}" alt="First slide">
                                    <img class="card-img-overlay col-6 mx-5 p-lg-4 pt-5" src="images/play.png" alt="">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Happy Smile</h5>
                                    <p class="text-muted pl-0">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                                    <div class="testemonial d-flex align-items-center">
                                        <img class="rounded-circle phillip-img" src="${element.author_pic_url}" width="30px" alt="">
                                        <h6 class="phillip pl-2 m-0">${element.author}</h6>
                                    </div>
                                    <div class="stars py-2 d-flex justify-content-between">
                                    <div>
                                        <img src="images/star_on.png" width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_on.png"  width="15px" alt="">
                                        <img src="images/star_off.png"  width="15px"alt="">
                                    </div>
                                    <span><h6 class="vid-length"> ${element.duration}</h6></span>
                                  </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
				`);
			});
		});
	});
	});


// End Document ready
	});
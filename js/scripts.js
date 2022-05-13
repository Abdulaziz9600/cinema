let elCinemaList = $(".js-cinema-list");

kinolar.forEach(function(kino) {
  kinolar.splice(97);

  let NewLi = createElement("li", " col-sm-4 col-md-3 col-lg-2 text-center p-4 mx-2 mb-2 border border-2 border-success rounded bg-light me-5 shadow p-3 mb-5 bg-secondary");
  let NewDiv = createElement("div"," text-danger");
  let NewH = createElement("h2","", kino.title.toUpperCase());
  let NewSpan = createElement("span","",kino.year)
  let NewPi = createElement("p"," text-success ",kino.cast);
  let NewPi2 = createElement("p","",kino.genres.toString());

  elCinemaList.append(NewLi);
  NewLi.append(NewDiv);
  NewDiv.append(NewH,NewSpan,NewPi,NewPi2);


})

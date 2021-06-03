var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//alert('Safari doesn't handle some aspects of Arabic fonts well. Visit this page in FireFox or Chrome for a better experience.')
if(isSafari){
	makeMessage();
	//alert('Safari does not support certain aspects of this site. We recommend using Chrome for the full experience.')
	if (document.querySelectorAll('span')){
		const spans = document.querySelectorAll('span')
		spans.forEach((span) => {
		  let content = span.innerText;
		  if (isArabic(content)){
		    //content = content.replace(/<\/span>/g, '&zwj;<\/span>&zwj;')
	        //content = content.replace(/(<span .+?>)/g, '<span>&zwj;')
	        content = content.replace(/<\/span>/g, '')
	        content = content.replace(/(<span .+?>)/g, '')
			span.innerHTML = content;

		  }
		});
	}

}
//from https://stackoverflow.com/questions/30010461/apply-style-on-arabic-text-only
function isArabic(s) {
    var arabic = /[\u0600-\u06FF]/;
    return arabic.test(s);
}


function makeMessage(){
  const newDiv = document.createElement("div");
  newDiv.id = 'safari-warning'
  // and give it some content
  const newContent = document.createTextNode("Safari does not support certain aspects of this site. We recommend using Chrome for the full experience.");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  console.log('warning')
  // add the newly created element and its content into the DOM
  const currentDiv = document.querySelector("#primary");
  console.log(currentDiv)
  console.log(newDiv)
  document.body.appendChild(newDiv);
}
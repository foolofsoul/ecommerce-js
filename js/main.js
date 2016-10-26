function Poster(title, desc, price, img) {
  this.title = title;
  this.desc = desc;
  this.price = price;
  this.img = img;
}

var ITEM_CONTAINER = document.getElementById('item-container')
var posterBambi = new Poster('Bambi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 8.50, 'img/bambi.jpg' )
var posterBigHero = new Poster('Big Hero 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 10.75, 'img/bighero.jpg' )
var posterBVS = new Poster('Batman Vs. Superman', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 9.00, 'img/bvs.jpg' )
var posterGodzilla = new Poster('Shin Godzilla', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 6.50, 'img/godzilla.jpg' )
var posterLobster = new Poster('The Lobster', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 8.00, 'img/lobster.jpg' )
var posterMars = new Poster('Mars', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 8.25, 'img/mars.png' )
var posterSkyfall = new Poster('007: Skyfall', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 9.25, 'img/skyfall.jpg' )
var posterStarWars = new Poster('Starwars', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur lectus et tempor blandit.', 10.75, 'img/starwars.jpg' )

var posterArray = [
  posterBambi,
  posterBigHero,
  posterBVS,
  posterGodzilla,
  posterLobster,
  posterMars,
  posterSkyfall,
  posterStarWars
]

function displayPosters(){
  for (var j = 0; j < 2; j++) {
    
    for (var i = 0; i < posterArray.length; i++) {
      var itemWrap = document.createElement('div');
          itemWrap.className = 'item-wrap clearfix'

      var imgWrap = document.createElement('div')
          imgWrap.className = 'img-wrap'
      
      var itemImg = document.createElement('img')
          itemImg.className = 'item-img'
          itemImg.setAttribute('src', posterArray[i].img)
      
      var contentWrap = document.createElement('div')
          contentWrap.className = 'content-wrap'

      var itemTitle = document.createElement('h3');
          itemTitle.className = 'item-title'
          itemTitle.textContent = posterArray[i].title
      
      var itemDesc = document.createElement('p')
          itemDesc.className = 'item-desc'
          itemDesc.textContent = posterArray[i].desc
      
      var purchaseDiv = document.createElement('div')
          purchaseDiv.className = 'purchase'
      
      var priceText = document.createElement('p')
          priceText.textContent = 'Price '
      
      var itemPrice = document.createElement('span')
          itemPrice.className = 'item-price'
          itemPrice.textContent = '$' + posterArray[i].price.toFixed(2)
      
      var btn = document.createElement('button')
          btn.className = 'btn'
          btn.textContent = 'Buy'

      priceText.appendChild(itemPrice)
      purchaseDiv.appendChild(priceText)
      purchaseDiv.appendChild(btn)
      contentWrap.appendChild(itemTitle)
      contentWrap.appendChild(itemDesc)
      contentWrap.appendChild(purchaseDiv)

      imgWrap.appendChild(itemImg)
      itemWrap.appendChild(imgWrap)
      itemWrap.appendChild(contentWrap)
      ITEM_CONTAINER.appendChild(itemWrap)
    }
  }
}

window.addEventListener('load', displayPosters)
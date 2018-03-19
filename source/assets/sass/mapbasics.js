
//карта 
ymaps.ready(init);
var myMap;

function init(){     
  myMap = new ymaps.Map('map', {
    center: [59.92230833925963,30.348150021484326],
    zoom: 11,
    controls:[],
  });
  myMap.behaviors.disable('scrollZoom');
    

  var coords = [
      [59.94554327989287,30.38935262114668],
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/map-n.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-26, -52],
      draggable: false, // и их можно перемещать
    });
        
  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }
        
  myMap.geoObjects.add(myCollection);
}
    

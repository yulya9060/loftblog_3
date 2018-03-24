// //карта 

// const ymaps = 'https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU';
// ymaps.ready(init);
// var myMap;

// function init(){     
//   myMap = new ymaps.Map('map', {
//     center: [59.92230833925963,30.348150021484326],
//     zoom: 11,
//     controls:[],
//   });
//   myMap.behaviors.disable('scrollZoom');
    

//   var coords = [
//       [59.94554327989287,30.38935262114668],
//     ],
//     myCollection = new ymaps.GeoObjectCollection({}, {
//       iconLayout: 'default#image',
//       // iconImageHref: './images/icons/map-n.svg',
//       iconImageSize: [46, 57],
//       iconImageOffset: [-26, -52],
//       draggable: false, // и их можно перемещать
//     });
        
//   for (var i = 0; i < coords.length; i++) {
//     myCollection.add(new ymaps.Placemark(coords[i]));
//   }
        
//   myMap.geoObjects.add(myCollection);
// }


window.initMap = function() {
  var uluru = {lat: 55.671998, lng: 37.492849}; 
  var me = {lat: 55.676241, lng: 37.505222}; 

  var styledMapType = new google.maps.StyledMapType( 
      [
          {
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#f5f5f5',
              },
            ],
          },
          {
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off',
              },
            ],
          },
          {
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#616161',
              },
            ],
          },
          {
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#f5f5f5',
              },
            ],
          },
          {
            'featureType': 'administrative.land_parcel',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#bdbdbd',
              },
            ],
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#eeeeee',
              },
            ],
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'off',
              },
            ],
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#757575',
              },
            ],
          },
          {
            'featureType': 'poi.business',
            'stylers': [
              {
                'visibility': 'off',
              },
            ],
          },
          {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#e5e5e5',
              },
            ],
          },
          {
            'featureType': 'poi.park',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#9e9e9e',
              },
            ],
          },
          {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#ffffff',
              },
            ],
          },
          {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off',
              },
            ],
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#757575',
              },
            ],
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#dadada',
              },
            ],
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#616161',
              },
            ],
          },
          {
            'featureType': 'road.local',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#9e9e9e',
              },
            ],
          },
          {
            'featureType': 'transit',
            'stylers': [
              {
                'visibility': 'off',
              },
            ],
          },
          {
            'featureType': 'transit.line',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#e5e5e5',
              },
            ],
          },
          {
            'featureType': 'transit.station',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#eeeeee',
              },
            ],
          },
          {
            'featureType': 'water',
            'stylers': [
              {
                'color': '#86a77a',
              },
            ],
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#c9c9c9',
              },
            ],
          },
          {
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#86a77a',
              },
            ],
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#9e9e9e',
              },
            ],
          },
        ],
        {name: 'Styled Map'});


  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru,
      mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                  'styled_map'],
        },
  });
  var marker = new google.maps.Marker({
      position: me,
      map: map,
  });

  map.mapTypes.set('map', styledMapType);
      map.setMapTypeId('map');

};

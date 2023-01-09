
const linkLocationTool = "https://yandex.ru/map-constructor/location-tool/?from=club"
const def = [54.794991595462335,32.04639962469476];
const phoenix = [54.774702712107135,32.04553388095091];


function init(){
    let map = new ymaps.Map('map-test', {
        center: def,
        zoom: 13
    });

    let placemarkLigth = new ymaps.Placemark(def, {
        balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Город Смоленск, ул. Кашена дом 1</div>
                <div class="balloon__timeTable">
                    <a href="#">Посмотреть рассписание</a>
                </div>
            </div>
        
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/4294/4294842.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -30]
    });

    let placemarkPhoenix = new ymaps.Placemark(phoenix, {
        balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Город Смоленск, пр. Гагарина 10/2</div>
                <div class="balloon__timeTable">
                    <a href="#">Посмотреть рассписание</a>
                </div>
            </div>
        
        `
    },{
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/4294/4294842.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-16, -30]
    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemarkLigth);
    map.geoObjects.add(placemarkPhoenix);
}

ymaps.ready(init)
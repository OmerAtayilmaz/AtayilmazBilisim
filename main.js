const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//scrolling
const sectionProjects=document.querySelector('#mission');
const btnHome=document.getElementById('btn-home');

//map
const coords=[37.1004734,34.1546638];
var map = L.map('map').setView(coords, 8);



tabsContainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');//closesti eklemezsek buttondaki spana tıklarsak butonu tıklanmış saymaz
  //Guard clause
  if(!clicked)return;
  tabs.forEach(el=>el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active'); 

  //activate content area
  tabsContent.forEach(el=>el.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

/* map */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ATAYILMAZ Bilişim Tarafından Özelleştirilmiştir.'
}).addTo(map);

L.marker(coords ).addTo(map)
    .bindPopup('<h6>Sizin için buradayız 🚩</h6>')
    .openPopup();

/* scrolling */
document.querySelector('.navbar-nav').addEventListener('click',function(e){
  e.preventDefault();
  let obje=e.target.parentElement.getAttribute('href');
  if(e.target.localName==='a')obje=e.target.getAttribute('href');

  if(!obje) return;
  document.querySelector(obje).scrollIntoView({behavior:'smooth'})
})
btnHome.addEventListener('click',function(e){
  e.preventDefault();
  console.log(sectionProjects,btnHome);
  sectionProjects.scrollIntoView({behavior:'smooth'})
})


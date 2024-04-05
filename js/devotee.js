// 定义全局函数，用于处理mouseover和mouseout事件
function handleMouseEvents(element, former, later) {
  element.addEventListener('mouseover', () => {
    element.textContent = later;
    element.style.backgroundColor = '#DDDDDD';
  });

  element.addEventListener('mouseout', () => {
    element.textContent = former;
    element.style.backgroundColor = '#f2f2f2';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var elementsWithId = document.querySelectorAll('[id]');

  elementsWithId.forEach(function (element) {
    handleMouseEvents(element, element.textContent, element.id);
  });
});

//Font loader
var Devotee = new FontFaceObserver('Devotee');
var Skranji = new FontFaceObserver('Skranji');
var SkranjiBold = new FontFaceObserver('Skranji Bold');


Promise.all([Devotee.load(), Skranji.load(), SkranjiBold.load()]).then(function () {
  console.log('all loaded');
}, function () {
  console.log('Font is not available');
  alert('Unable to load fonts!')
}
);




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
    console.log(element.id);
  });
});





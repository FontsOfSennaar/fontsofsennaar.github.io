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
  // Subject
  var dvt = document.getElementById('devotee');
  var warr = document.getElementById('warrior');
  var opt = document.getElementById('optician');
  var man = document.getElementById('man');
  // Verb
  var cls = document.getElementById('close');
  var make = document.getElementById('make');
  // Object
  var ptn = document.getElementById('potion');
  var plt = document.getElementById('plant');
  var inst = document.getElementById('instrument');
  var wpn = document.getElementById('weapon');
  // Concept/State
  var mus = document.getElementById('music');
  // Place
  var abb = document.getElementById('abbey');
  var ch = document.getElementById('church');
  var cem = document.getElementById('cemetery');
  var gdn = document.getElementById('garden');
// Other
var grt = document.getElementById('greetings');
var we = document.getElementById('we');
var dvts = document.getElementById('devotees');


  // 使用全局函数处理mouseover和mouseout事件
  // Subject
  handleMouseEvents(dvt, dvt.textContent, 'devotee');
  handleMouseEvents(warr, warr.textContent, 'warrior');
  handleMouseEvents(opt, opt.textContent, 'optician');
  handleMouseEvents(man, man.textContent, 'man/human');
  // Verb
  handleMouseEvents(cls, cls.textContent, 'close');
  handleMouseEvents(make, make.textContent, 'make/create');
  // Object
  handleMouseEvents(ptn, ptn.textContent, 'potion');
  handleMouseEvents(plt, plt.textContent, 'plant');
  handleMouseEvents(inst, inst.textContent, 'instrument');
  handleMouseEvents(wpn, wpn.textContent, 'weapon');
  // Concept/State
  handleMouseEvents(mus, mus.textContent, 'music');
  // Place
  handleMouseEvents(abb, abb.textContent, 'abbey');
  handleMouseEvents(ch, ch.textContent, 'church');
  handleMouseEvents(cem, cem.textContent, 'cemetery');
  handleMouseEvents(gdn, gdn.textContent, 'garden');
  // Other
  handleMouseEvents(grt, grt.textContent, 'greetings');
  handleMouseEvents(we, we.textContent, 'we');
  handleMouseEvents(dvts, dvts.textContent, 'devotees');
});





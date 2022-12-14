//alert("daha yapım aşamasında");
let d = document;
let wrap = d.querySelector('.wrap');
let items = d.querySelector('.items');
let itemCount = d.querySelectorAll('.item').length;
let pos = 0;
let transform = Modernizr.prefixed('transform');
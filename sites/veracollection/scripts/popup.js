let popups=document.querySelectorAll(".popup");for(let o=0;o<popups.length;o++){var e=document.getElementById("popupNumber");e.id="popupNumber"+o,document.getElementById(e.id).className+=" popup"+o}let popup=document.querySelector(".popup0"),button=document.querySelector(".slider-1-detail"),body=document.querySelectorAll(".popup-body"),details=document.querySelectorAll(".popupDetail");for(var i=0;i<details.length;i++){var f=document.getElementById("detailNumber");f.id="detailNumber"+i,document.getElementById(f.id).className+=" detail"+i}let closes=document.querySelectorAll(".closePopup");for(i=0;i<closes.length;i++){var g=document.getElementById("closeNumber");g.id="closeNumber"+i,document.getElementById(g.id).className+=" closePopup"+i}document.querySelectorAll(".closePopup").forEach((function(e){e.onmouseover=function(){document.querySelectorAll(".popup-body__close-wrapper .span-1, .popup-body__close-wrapper .span-2").forEach((function(e){e.classList.add("hover")}))}})),document.querySelectorAll(".closePopup").forEach((function(e){e.onmouseout=function(){document.querySelectorAll(".popup-body__close-wrapper .span-1, .popup-body__close-wrapper .span-2").forEach((function(e){e.classList.remove("hover")}))}})),document.getElementById("detailNumber0").onclick=function(){document.querySelector(".popup0").classList.add("open")},document.getElementById("detailNumber1").onclick=function(){document.querySelector(".popup1").classList.add("open")},document.getElementById("detailNumber2").onclick=function(){document.querySelector(".popup2").classList.add("open")},document.getElementById("detailNumber3").onclick=function(){document.querySelector(".popup3").classList.add("open")},document.getElementById("detailNumber4").onclick=function(){document.querySelector(".popup4").classList.add("open")},document.getElementById("detailNumber5").onclick=function(){document.querySelector(".popup5").classList.add("open")},document.getElementById("detailNumber6").onclick=function(){document.querySelector(".popup6").classList.add("open")},document.getElementById("detailNumber7").onclick=function(){document.querySelector(".popup7").classList.add("open")},document.getElementById("detailNumber8").onclick=function(){document.querySelector(".popup8").classList.add("open")},document.getElementById("detailNumber8").onclick=function(){document.querySelector(".popup9").classList.add("open")},$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup0").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup1").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup2").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup3").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup4").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup5").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup6").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup7").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup8").classList.remove("open")})),$(document).mousedown((function(e){var o=$(body);o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".popup9").classList.remove("open")})),document.getElementById("closeNumber0").onclick=function(){document.querySelector(".popup0").classList.remove("open")},document.getElementById("closeNumber1").onclick=function(){document.querySelector(".popup1").classList.remove("open")},document.getElementById("closeNumber2").onclick=function(){document.querySelector(".popup2").classList.remove("open")},document.getElementById("closeNumber3").onclick=function(){document.querySelector(".popup3").classList.remove("open")},document.getElementById("closeNumber4").onclick=function(){document.querySelector(".popup4").classList.remove("open")},document.getElementById("closeNumber5").onclick=function(){document.querySelector(".popup5").classList.remove("open")},document.getElementById("closeNumber6").onclick=function(){document.querySelector(".popup6").classList.remove("open")},document.getElementById("closeNumber7").onclick=function(){document.querySelector(".popup7").classList.remove("open")},document.getElementById("closeNumber8").onclick=function(){document.querySelector(".popup8").classList.remove("open")},document.getElementById("closeNumber8").onclick=function(){document.querySelector(".popup9").classList.remove("open")};let richesPopup=document.querySelectorAll(".riches-popup");for(let e=0;e<richesPopup.length;e++){var h=document.getElementById("richesPopupNumber");h.id="richesPopupNumber"+e,document.getElementById(h.id).className+=" riches-popup"+e}let richesDetail=document.querySelectorAll(".richesDetail");for(let e=0;e<richesDetail.length;e++){var j=document.getElementById("richesDetailNumber");j.id="richesDetailNumber"+e,document.getElementById(j.id).className+=" richesDetail"+e}document.getElementById("richesDetailNumber0").onclick=function(){document.querySelector(".riches-popup0").classList.add("open")},document.getElementById("richesDetailNumber1").onclick=function(){document.querySelector(".riches-popup0").classList.add("open")},document.getElementById("richesDetailNumber2").onclick=function(){document.querySelector(".riches-popup0").classList.add("open")},document.getElementById("closeNumber9").onclick=function(){document.querySelector(".riches-popup0").classList.remove("open")},$(document).mousedown((function(e){var o=$(".riches-popup-body");o.is(e.target)||0!==o.has(e.target).length||document.querySelector(".riches-popup0").classList.remove("open")}));
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    for(i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", changeText);
    }

    function changeText() {
      var thing = this.firstElementChild;

      if(thing.className.localeCompare("fas fa-chevron-right")==0)
        thing.className = "fas fa-chevron-down";
      else
        thing.className = "fas fa-chevron-right";
      
    }
  }

}

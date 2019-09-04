import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    return this.toastr.info('Copied!');
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openbtn").style.display = "none";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openbtn").style.display = "block";
  }

}

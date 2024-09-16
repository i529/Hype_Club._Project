import { Component, OnInit,ElementRef, Renderer2, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private el:ElementRef, private renderer:Renderer2) {}

  ngOnInit(): void {
    
  }
  @HostListener('window:scroll',[])
  onWindowScroll() {
    const navbar = this.el.nativeElement.querySelector('.header');

    if (window.pageYOffset > navbar.offsetTop){
      this.renderer.addClass(navbar, 'fixed');
    } else {
      this.renderer.removeClass(navbar, 'fixed');
    }
  }
}


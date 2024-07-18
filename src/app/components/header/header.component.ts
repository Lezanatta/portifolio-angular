import { Component, Renderer2, OnInit, OnDestroy, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.scroll, true);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.scroll, true);
    }
  }

  scroll = (): void => {
    const header = document.querySelector('#header');
    if (header) {
      if (window.scrollY > 200) {
        this.renderer.addClass(header, 'rolagem');
      } else {
        this.renderer.removeClass(header, 'rolagem');
      }
    }
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

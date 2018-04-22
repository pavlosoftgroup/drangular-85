import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
	
})
export class AppComponent {
    public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };

    constructor(
        private router: Router,
        private meta: Meta,
        private titleService: Title,
        private slimLoadingBarService: SlimLoadingBarService
    ){}

    mainclass: boolean;
    ngOnInit() {
        this.slimLoadingBarService.start();
        document.getElementById("loader").style.display = 'none';
        
        this.router.events.subscribe(evt => {
            this.mainclass = false;
            window.scrollTo(0,0);
            this.slimLoadingBarService.complete();
        });

        this.meta.addTag({ name: 'keyword', content: 'Angushop, angular, eccommerce, template, Material Design' });
        this.meta.addTag({ name: 'description', content: 'свіжо-смачно сервіс Gastro Bus' });
        this.meta.addTag({ name: 'robots', content: 'index, follow' });
    }
}

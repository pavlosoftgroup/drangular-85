import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from "lodash";

import {AngPage} from './data/ang-page';


@Injectable()
export class PageService {
    private baseUrl: string = 'http://mp.dev.devshop.odnodumci.com';


    constructor(private http: Http) {
    }

    getAngularPosts(): Observable<AngPage[]> {
        return this.http.get(this.baseUrl + '/api/ang-page')
            .map(this.confirmPage);
    }

    getAngularPost(landingPage: string): Observable<AngPage>    {
        return this.getAngularPosts().map(pages => pages.find(page => page.landingPage === landingPage))
    }

    private confirmPage(response: Response){
        let res = response.json();
        let pages: AngPage[] = [];
        for (let i = 0; i < res.length; i++){
            pages.push( new AngPage(
                res[i].landingPage,
                res[i].body
            ))
        }
        return pages;
    }

    public stripHtml(html: string) {
		var tmp = document.createElement("div");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText;
	}

}

import { Component, HostListener } from '@angular/core';
import GifService from "../../services/GifService";
import * as Gifs from '../../services/models/gifs';

@Component({
    selector: 'app-root',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css'],
    providers: [GifService],
})

export class TimelineComponent {

    private gifs: [Gifs.Gif];

    constructor(private gifService: GifService) { }

    searchGifs(query: string): void {
        this.gifService
            .fetchGifs(query)
            .subscribe(response => {
                this.gifs = response.data
            });
    }


}
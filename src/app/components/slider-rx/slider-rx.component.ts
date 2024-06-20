import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  concatMap,
  delay,
  delayWhen,
  from,
  fromEvent,
  interval,
  merge,
  of,
  skipWhile,
  switchMap,
  tap,
  timer,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-slider-rx',
  templateUrl: './slider-rx.component.html',
  styleUrl: './slider-rx.component.scss',
})
export class SliderRxComponent {
  @Input() links: string[] = [];

  @ViewChild('slider', { static: true }) slider!: ElementRef;

  public started$ = new BehaviorSubject(false);
  public paused$ = new BehaviorSubject(false);
  public delay$ = this.paused$.pipe(
    switchMap((isPaused) =>
      timer(isPaused ? 20000 : this.started$.getValue() ? 2000 : 0),
    ),
    tap((_) => this.started$.next(true)),
  );

  public url$: Observable<string> = interval().pipe(
    switchMap((_) => from(this.links)),
    concatMap((link: string) => of(link).pipe(delayWhen(() => this.delay$))),
  );
  //
  public mousedown$ = interval().pipe(
    switchMap((_) => from(this.links)),
    concatMap((link: string) => of(link).pipe(delay(1000))),
    tap((e: any) => console.log(e)),
    skipWhile(() => this.slider?.nativeElement === undefined),
    switchMap(() => {
      return fromEvent(this.slider.nativeElement, 'mousedown');
    }),
    tap((e: any) => console.log(e)),
  );
  //
  // public mouseup$ = fromEvent(this.slider.nativeElement, 'mouseup');

  public click1$ = new Subject();
  public click2$ = new Subject();
  public status$ = merge(this.click1$, this.click2$).pipe(
    tap((e: any) => console.log(e)),
  );
}

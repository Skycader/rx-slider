import { Component, Input } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  concatMap,
  delay,
  delayWhen,
  exhaustMap,
  from,
  interval,
  mergeMap,
  of,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-slider-rx',
  templateUrl: './slider-rx.component.html',
  styleUrl: './slider-rx.component.scss',
})
export class SliderRxComponent {
  // This could be any observable

  @Input() links: string[] = [];
  public started$ = new BehaviorSubject(false);
  public paused$ = new BehaviorSubject(false);
  public delay$ = this.paused$.pipe(
    switchMap((isPaused) =>
      timer(isPaused ? 20000 : this.started$.getValue() ? 1000 : 0),
    ),
    tap((_) => this.started$.next(true)),
  );

  public url$: Observable<string> = interval().pipe(
    switchMap((_) => from(this.links)),
    concatMap((link: string) => of(link).pipe(delayWhen(() => this.delay$))),
  );
}

import { animate, animateChild, group, keyframes, query, style, transition, trigger } from '@angular/animations';

const transitioningStyles = [
    style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }),
];

export const slideInAnimation = trigger('slideIn', [
    transition(':decrement', [
        style({ position: 'relative' }),
        query(':enter, :leave', transitioningStyles, { optional: true }),
        query(':enter', [style({ left: '-100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true }),
            query(':enter', [ animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
        ]),
        query(':enter', animateChild(), { optional: true }),
    ]),
    transition(':increment', [
        style({ position: 'relative' }),
        query(':enter, :leave', transitioningStyles, { optional: true }),
        query(':enter', [style({ left: '100%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))], { optional: true }),
            query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
        ]),
        query(':enter', animateChild(), { optional: true }),
    ]),
]);

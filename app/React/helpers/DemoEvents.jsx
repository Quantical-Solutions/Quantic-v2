import React from 'react'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
let d = new Date();
let month = ('0' + (d.getMonth()+1)).slice(-2);

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'All Day Event',
        start: '2020-' + month + '-01'
    },
    {
        id: createEventId(),
        title: 'Long Event',
        start: '2020-' + month + '-07',
        end: '2020-' + month + '-10',
        rendering: 'background'
    },
    {
        id: createEventId(),
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-' + month + '-09T16:00:00'
    },
    {
        id: createEventId(),
        groupId: 999,
        title: 'Repeating Event',
        start: '2020-' + month + '-16T16:00:00'
    },
    {
        id: createEventId(),
        title: 'Conference',
        start: '2020-' + month + '-11',
        end: '2020-' + month + '-13',
        rendering: 'background'
    },
    {
        id: createEventId(),
        title: 'Meeting',
        start: '2020-' + month + '-12T10:30:00',
        end: '2020-' + month + '-12T12:30:00'
    },
    {
        id: createEventId(),
        title: 'Lunch',
        start: '2020-' + month + '-12T12:00:00'
    },
    {
        id: createEventId(),
        title: 'Meeting',
        start: '2020-' + month + '-12T14:30:00'
    },
    {
        id: createEventId(),
        title: 'Happy Hour',
        start: '2020-' + month + '-12T17:30:00'
    },
    {
        id: createEventId(),
        title: 'Dinner',
        start: '2020-' + month + '-12T20:00:00'
    },
    {
        id: createEventId(),
        title: 'Birthday Party',
        start: '2020-' + month + '-13T07:00:00'
    },
    {
        id: createEventId(),
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2020-' + month + '-28'
    }
]

export function createEventId() {
    return String(eventGuid++)
}
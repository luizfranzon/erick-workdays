'use client'

import Calendar from "react-calendar";

import { add, differenceInCalendarDays } from "date-fns"
import { useState } from "react";

import 'react-calendar/dist/Calendar.css';
import './globals.css'

export default function Home() {

  let highlightedDates = [
    new Date("2023-11-13")
  ]

  for (let i = 0; i < 600; i++) {
    highlightedDates.push(add(highlightedDates[highlightedDates.length - 1], {
      days: 2
    }))
  }

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileClassName({ date, view }) {
    if (
      view === 'month' &&
      highlightedDates.find((dDate) => isSameDay(dDate, date))
    ) {
      return 'highlight';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <Calendar
        locale="pt-BR"
        tileClassName={tileClassName} />
    </div>
  )
}

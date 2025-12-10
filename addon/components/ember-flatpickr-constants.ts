export const SELECTORS = {
  prevButton: '.flatpickr-prev-month',
  nextButton: '.flatpickr-next-month',
  monthSelect: '.flatpickr-monthDropdown-months',
  currentMonth: '.flatpickr-current-month .cur-month',
  currentMonthFallback: '.flatpickr-current-month',
  yearInput: '.flatpickr-current-month .cur-year',
  yearInputFallback: '.cur-year',
  daysContainer: '.flatpickr-days',
  dayTabbable: '.flatpickr-day[tabindex=\'0\']',
  daySelected: '.flatpickr-day.selected',
  dayToday: '.flatpickr-day.today',
  dayEnabledInMonth:
    '.flatpickr-day:not(.prevMonthDay):not(.nextMonthDay):not(.flatpickr-disabled):not([aria-disabled=\"true\"])'
} as const;

export const ARIA = {
  calendarLabel: 'Select date from the calendar',
  prevMonthLabel: 'Previous month',
  nextMonthLabel: 'Next month',
  selectMonthLabel: 'Select month',
  enterYearLabel: 'Enter year'
} as const;

export const KEYS = {
  Enter: 'Enter',
  Space: ' ',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  Tab: 'Tab'
} as const;



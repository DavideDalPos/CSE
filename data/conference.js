// =============================================================================
//  CSE ANNUAL CONFERENCE — the only file to edit each year
// =============================================================================
//
//  The conference page (/meetings) decides by itself what to show, by
//  comparing today's date with the dates below (all times are Eastern Time).
//  You never need to switch anything on or off by hand.
//
//   PHASE        WHEN                              WHAT VISITORS SEE
//   ---------    --------------------------------  -----------------------------------
//   planning     `date` is ''                      "Details coming soon"
//   upcoming     before `date` + `start`           date, venue, live countdown
//   live         between `start` and `end`         "Happening now" + Zoom button
//   finished     after `end`                       "Thank you" + it joins the archive
//
//  Other boxes appear and disappear on their own:
//   • Call for talks & posters → visible from `submissions.opens` (or right away
//     if empty) until the end of `submissions.deadline`.
//   • Registration button      → visible when `registration` has a link.
//   • Program                  → shows `program` (PDF) and/or `schedule` when
//                                filled in; otherwise "Program coming soon".
//
//  STARTING A NEW YEAR: change `year`, set `date: ''` (planning) or the new date,
//  update the deadlines and clear `program`, `schedule`, `registration`, `zoom`.
//  Then add last year's PDFs/video to the archive in data/conferenceArchive.js.
//
//  PREVIEW: add ?now=2027-01-16T10:00 to the page address to see how the page
//  will look at any moment (e.g. /meetings?now=2026-12-20T12:00).
// =============================================================================

export default {
  year: 2027,

  // ---- When ------------------------------------------------------------------
  date: '2027-01-16', // YYYY-MM-DD — leave '' while the date is not decided
  start: '09:30', // 24-hour clock, Eastern Time
  end: '18:30',

  // ---- Where -----------------------------------------------------------------
  venue: 'Doyle Conner Building',
  host: 'Florida State Collection of Arthropods (FSCA)',
  address: '1911 SW 34th Street, Gainesville, FL 32608',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Doyle+Conner+Building+1911+SW+34th+Street+Gainesville+FL',
  online: true, // also on Zoom?
  zoom: '', // Zoom link — shown only while the conference is live (optional)

  // ---- Practical -------------------------------------------------------------
  fee: 'Free',
  lunch: 'Lunch is provided for in-person participants.',
  organizer: '', // name shown in the archive once the conference is over
  contact: 'conference@csentomology.com',
  highlight: 'Held at the home of the Florida State Collection of Arthropods — attendees can visit the collection during the meeting.',

  // ---- Call for talks & posters ----------------------------------------------
  submissions: {
    opens: '', // YYYY-MM-DD, or '' to show it as soon as the date is set
    deadline: '2026-12-15', // last day to submit (inclusive)
    talkLength: 15, // minutes, questions included
    topics: [
      'Travel logs and publications',
      'Ongoing or upcoming projects',
      'Morphological discussions and taxonomic work on insects and other arthropods'
    ],
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSeeQTYjJtXy69-M8GzCHQ6Ap9ZcyjIidJ01-ASXcbKkFAYCgQ/viewform?usp=header',
    template: '/PDF/conference/CSE_SubmissionForm.docx'
  },

  // ---- Registration & program ------------------------------------------------
  registration: '', // link to a registration form, if you use one
  program: '', // link to the program PDF (Google Drive is fine)
  // Optional detailed schedule — shown on the page as a timeline
  // schedule: [
  //   { time: '09:30', title: 'Welcome and introductions' },
  //   { time: '09:45', title: 'Talk title', who: 'Speaker name' },
  //   { time: '12:30', title: 'Lunch and collection tours', break: true },
  // ],
  schedule: []
}

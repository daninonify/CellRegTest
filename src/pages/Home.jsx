import { useState } from "react";

const StatusBadge = ({ present }) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
      present
        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
        : "bg-red-50 text-red-600 ring-1 ring-red-200"
    }`}
  >
    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${present ? "bg-emerald-500" : "bg-red-400"}`} />
    {present ? "Present" : "Absent"}
  </span>
);

const AttendanceTable = ({ title, subtitle, data }) => {
  const presentCount = data.filter((d) => d.present).length;
  const absentCount = data.filter((d) => !d.present).length;

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-100">
        <p className="text-sm font-semibold text-slate-700 tracking-tight">{title}</p>
        <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
      </div>
      <div className="overflow-auto flex-1 print:overflow-visible print:flex-none print:max-h-none">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Date
              </th>
              <th className="text-right px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3 text-sm font-mono text-slate-600">{row.date}</td>
                <td className="px-5 py-3 text-right">
                  <StatusBadge present={row.present} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs text-slate-500">
            Present <span className="font-semibold text-slate-700">{presentCount}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="text-xs text-slate-500">
            Absent <span className="font-semibold text-slate-700">{absentCount}</span>
          </span>
        </div>
        <span className="ml-auto text-xs text-slate-400">
          Total <span className="font-semibold text-slate-600">{data.length}</span>
        </span>
      </div>
    </div>
  );
};

const InfoChip = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-base bg-slate-100 text-slate-500">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs text-slate-400 font-medium">{label}</p>
      <p className="text-sm text-slate-800 font-semibold truncate">{value}</p>
    </div>
  </div>
);

export default function CellRegisterCard({
  name = "AIRE, DANIELLA",
  address = "Police Station Road Ebrumede",
  email = "airedaniella@gmail.com",
  phone1 = "08032417923",
  phone2 = "08032417923",
  matricNumber = "SMS/ACC/240267",
  faculty = "Social And Management Sciences",
  department = "Accounting",
  serialNumber = "5867",
  cellGroup = "Cedar, Cell 3",
  meetingDays = "Sundays",
  meetingTime = "4:00 PM - 5:00 PM",
  meetingVenue = "AED Lecture Room 3",
  photoUrl = "avatarman.png",
  cellAttendanceData = [{ date: "2025-11-16", present: true }],
  chapelAttendanceData = [
    { date: "2025-10-26", present: true },
    { date: "2025-10-28", present: true },
    { date: "2025-11-04", present: false },
    { date: "2025-11-07", present: true },
    { date: "2025-11-09", present: true },
    { date: "2025-11-11", present: true },
    { date: "2025-11-14", present: true },
    { date: "2025-11-18", present: false },
    { date: "2025-11-21", present: true },
    { date: "2025-11-23", present: true },
    { date: "2025-11-25", present: true },
  ],
}) {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap');
        .card-root { font-family: 'DM Sans', sans-serif; }
        .display-font { font-family: 'DM Serif Display', serif; }
      `}</style>

      <div className="card-root max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">

          {/* Header Banner */}
          <div className="relative bg-slate-900 px-8 py-8 sm:px-12 sm:py-10 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-slate-700 opacity-30" />
            <div className="absolute top-6 right-24 w-24 h-24 rounded-full bg-slate-600 opacity-20" />
            <div className="relative">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-300">Cell Register</p>
              <div className="mb-5 h-px w-28 bg-slate-600/70" />
            </div>
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="display-font text-3xl sm:text-4xl text-white leading-tight">{name}</h1>
                <p className="text-slate-400 text-sm mt-1">{address}</p>
              </div>
              <div className="self-start sm:self-auto flex-shrink-0 bg-slate-800 border border-slate-600 rounded-2xl px-6 py-4 text-center">
                <p className="text-xs text-slate-400 uppercase tracking-wider">Serial No.</p>
                <p className="display-font text-3xl text-white mt-0.5">{serialNumber}</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-8 sm:px-12 sm:py-10 space-y-10">

            {/* Profile + Contact Row */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-lg">
                  <img src={photoUrl || "/avatarman.png"} alt={name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InfoChip icon={<span>&#9993;</span>} label="Email" value={email} />
                <InfoChip icon={<span>&#9742;</span>} label="Phone" value={phone2 ? `${phone1} / ${phone2}` : phone1} />
                <InfoChip icon={<span>#</span>} label="Matric No." value={matricNumber} />
                <InfoChip icon={<span>&#127891;</span>} label="Faculty" value={faculty} />
                <InfoChip icon={<span>&#128218;</span>} label="Department" value={department} />
              </div>
            </div>

            <div className="border-t border-slate-100" />

            {/* Cell Info Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Cell Group", value: cellGroup },
                { label: "Meeting Day", value: meetingDays },
                { label: "Time", value: meetingTime },
                { label: "Venue", value: meetingVenue },
              ].map(({ label, value }) => (
                <div key={label} className="bg-slate-50 rounded-2xl px-5 py-4 border border-slate-100">
                  <p className="text-xs text-slate-400 font-medium mb-1">{label}</p>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">{value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100" />

            {/* Attendance Tables */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-5 font-medium">
                Attendance Records
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <AttendanceTable
                  title="Cell Attendance"
                  subtitle={`Cedar, Cell 3 · Total ${cellAttendanceData.length}`}
                  data={cellAttendanceData}
                />
                <AttendanceTable
                  title="Chapel Attendance"
                  subtitle={`All Sessions · Total ${chapelAttendanceData.length}`}
                  data={chapelAttendanceData}
                />
              </div>
            </div>

            {/* Print Button */}
            <div className="flex justify-end print:hidden">
              <button
                onClick={() => window.print()}
                className="rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-700 transition-colors"
              >
                Print Record
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-100 bg-slate-50 px-12 py-4 flex items-center justify-between print:hidden">
            {/* <p className="text-xs text-slate-400">Cell Register System</p> */}
            {/* <p className="text-xs text-slate-400">
              Generated {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p> */}
          </div>

        </div>
      </div>
    </div>
  );
}




// // CellRegisterCard.jsx
// import React from 'react';

// export default function CellRegisterCard({
//   name = "AIRE, DANIELLA",
//   address = "Police Station Road Ebrumede",
//   email = "airedaniella@gmail.com",
//   phone1 = "08032417923",
//   phone2 = "08032417923",
//   matricNumber = "SMS/ACC/240267",
//   faculty = "Social And Management Sciences",
//   department = "Accounting",
//   serialNumber = "5867",
//   cellGroup = "Cedar, Cell 3",
//   meetingDays = "Sundays",
//   meetingTime = "4:00 PM - 5:00 PM",
//   meetingVenue = "AED Lecture Room 3",
//   cellAttendance = 1,
//   chapelAttendance = 10,
//   photoUrl = "https://via.placeholder.com/120?text=Photo",
// }) {
//   return (
//     <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-4 sm:px-6 lg:px-10 print:bg-white print:p-0 print:min-h-0">
//       <div className="mx-auto w-full max-w-screen-2xl">
//         {/* Main Card */}
//         <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 print:shadow-none print:ring-0 print:rounded-none">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-6 sm:px-10 sm:py-8 text-white">
//             <div className="flex items-center justify-between">
//               <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">
//                 CELL REGISTER
//               </h1>
 
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 sm:p-10 lg:p-12">
//             <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
//               {/* Photo */}
//               <div className="mb-8 lg:mb-0 flex-shrink-0 mx-auto lg:mx-0">
//                 <div className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 overflow-hidden rounded-2xl border-4 border-indigo-100 shadow-xl">
//                   <img
//                     src={photoUrl}
//                     alt={name}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Main Info */}
//               <div className="flex-1 space-y-8 lg:space-y-10">
//                 <div>
//                   <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//                     {name}
//                   </h2>
//                   <p className="mt-2 text-xl sm:text-2xl text-gray-600">{address}</p>
//                 </div>

//                 {/* Contact Grid */}
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   <div className="flex items-center gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xl">
//                       ✉
//                     </div>
//                     <div>
//                       <p className="text-base font-medium text-gray-500">Email</p>
//                       <p className="text-lg text-gray-900 break-all">{email}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 text-xl">
//                       ☎
//                     </div>
//                     <div>
//                       <p className="text-base font-medium text-gray-500">Phone</p>
//                       <p className="text-lg text-gray-900">
//                         {phone1}
//                         {phone2 && <span className="ml-3 text-gray-600">/ {phone2}</span>}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-xl">
//                       #
//                     </div>
//                     <div>
//                       <p className="text-base font-medium text-gray-500">Matric No</p>
//                       <p className="font-mono text-lg text-gray-900">{matricNumber}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Academic Info */}
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-">
//                   <div>
//                     <p className="text-base font-medium text-gray-500">Faculty</p>
//                     <p className="text-xl text-gray-900">{faculty}</p>
//                   </div>
//                   <div>
//                     <p className="text-base font-medium text-gray-500">Department</p>
//                     <p className="text-xl text-gray-900">{department}</p>
//                   </div>
//                 </div>

//                 {/* Cell Details */}
//                 <div className="rounded-xl bg-gray-50 p-6 lg:p-8">
//                   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     <div>
//                       <p className="text-base font-medium text-gray-600">Serial Number</p>
//                       <p className="text-3xl font-bold text-indigo-700">{serialNumber}</p>
//                     </div>
//                     <div>
//                       <p className="text-base font-medium text-gray-600">Cell Group</p>
//                       <p className="text-2xl font-semibold text-gray-900">{cellGroup}</p>
//                     </div>
//                     <div>
//                       <p className="text-base font-medium text-gray-600">Meeting</p>
//                       <p className="text-xl text-gray-900">
//                         {meetingDays} • {meetingTime}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-base font-medium text-gray-600">Venue</p>
//                       <p className="text-xl text-gray-900">{meetingVenue}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Print button moved here — before the summary */}
//                 <div className="flex justify-center sm:justify-start print:hidden">
//                   <button
//                     onClick={() => window.print()}
//                     className="rounded-xl bg-indigo-600 px-10 py-4 text-lg font-medium text-white shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
//                   >
//                     Print
//                   </button>
//                 </div>

//                 {/* Attendance Summary – now comes after the button */}
//                 <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 rounded-xl border border-gray-200 bg-white p-8 text-center mt-8 lg:mt-10">
//                   <div>
//                     <p className="text-lg text-gray-500">Cell Attendance</p>
//                     <p className="text-5xl font-bold text-emerald-600">{cellAttendance}</p>
//                   </div>
//                   <div className="hidden sm:block h-16 w-px bg-gray-300" />
//                   <div>
//                     <p className="text-lg text-gray-500">Chapel Attendance</p>
//                     <p className="text-5xl font-bold text-indigo-600">{chapelAttendance}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Optional small footer note – hidden on print */}
//           <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 print:hidden">
//             Generated on {new Date().toLocaleDateString()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// const cellData = [
//   { date: "2025-11-16", present: true },
// ];

// const chapelData = [
//   { date: "2025-10-26", present: true },
//   { date: "2025-10-28", present: true },
//   { date: "2025-11-04", present: false },
//   { date: "2025-11-07", present: true },
//   { date: "2025-11-09", present: true },
//   { date: "2025-11-11", present: true },
//   { date: "2025-11-14", present: true },
//   { date: "2025-11-18", present: false },
//   { date: "2025-11-21", present: true },
//   { date: "2025-11-23", present: true },
//   { date: "2025-11-25", present: true },
// ];

// const StatusBadge = ({ present }) => (
//   <span
//     className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
//       present
//         ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
//         : "bg-red-50 text-red-600 ring-1 ring-red-200"
//     }`}
//   >
//     <span
//       className={`w-1.5 h-1.5 rounded-full mr-2 ${
//         present ? "bg-emerald-500" : "bg-red-500"
//       }`}
//     />
//     {present ? "Present" : "Absent"}
//   </span>
// );

// const AttendanceTable = ({ title, data, subtitle }) => {
//   const presentCount = data.filter((d) => d.present).length;
//   const absentCount = data.filter((d) => !d.present).length;

//   return (
//     <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
//       {/* Header */}
//       <div className="px-6 py-5 border-b border-slate-100 bg-slate-50">
//         <h2 className="text-sm font-semibold text-slate-800 tracking-tight">{title}</h2>
//         <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
//       </div>

//       {/* Table */}
//       <div className="flex-1 overflow-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-slate-100">
//               <th className="text-left px-6 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
//                 Date
//               </th>
//               <th className="text-right px-6 py-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, i) => (
//               <tr
//                 key={i}
//                 className="border-b border-slate-50 hover:bg-slate-50 transition-colors duration-100"
//               >
//                 <td className="px-6 py-3.5 text-sm text-slate-600 font-mono">
//                   {row.date}
//                 </td>
//                 <td className="px-6 py-3.5 text-right">
//                   <StatusBadge present={row.present} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Footer Summary */}
//       <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center gap-6">
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-emerald-500" />
//           <span className="text-xs text-slate-500">
//             Present <span className="font-semibold text-slate-700">{presentCount}</span>
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-red-500" />
//           <span className="text-xs text-slate-500">
//             Absent <span className="font-semibold text-slate-700">{absentCount}</span>
//           </span>
//         </div>
//         <div className="ml-auto">
//           <span className="text-xs text-slate-400">
//             Total{" "}
//             <span className="font-semibold text-slate-600">{data.length}</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-8 font-sans">
//       <div className="max-w-4xl mx-auto">
//         {/* Page Header */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
//             Attendance Records
//           </h1>
//           <p className="text-sm text-slate-400 mt-1">Cedar, Cell 3 — 2025 Overview</p>
//         </div>

//         {/* Tables Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <AttendanceTable
//             title="Cell Attendance"
//             subtitle="Cedar, Cell 3"
//             data={cellData}
//           />
//           <AttendanceTable
//             title="Chapel Attendance"
//             subtitle="All Sessions"
//             data={chapelData}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
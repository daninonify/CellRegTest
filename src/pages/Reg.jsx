import { useState } from "react";
import avatarman1 from "../assets/avatarman1.png";


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
      <div className="overflow-auto flex-1">
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

function CellRegisterCard({
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
  photoUrl = avatarman1,
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
  const [selectedCell, setSelectedCell] = useState("");

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

          {/* Body containing only profile/contact */}
          <div className="px-8 py-8 sm:px-12 sm:py-10">

            {/* Profile + Contact Row */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-slate-100 shadow-lg">
                  <img src={photoUrl || avatarman1} alt={name} className="w-full h-full object-cover object-top" />
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

            {/* dropdown section */}
            <div className="mt-10 space-y-6">
              <div className="h-px bg-slate-100" />

              <p className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                Cell Assignment
              </p>

              {/* Cell dropdown */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Cell
                </label>
                <div className="relative w-full sm:w-2/3">
                  <select
                    value={selectedCell}
                    onChange={(e) => setSelectedCell(e.target.value)}
                    className="appearance-none w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-10 text-sm text-slate-800 font-medium shadow-sm
                      focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400
                      hover:border-slate-400 transition-all duration-150 cursor-pointer"
                  >
                    <option value="" disabled>Select a cell group…</option>
                    <option>Shabach (Legacy Campus) — Mondays 6–8 pm</option>
                    <option>Agape (Legacy Campus) — Mondays 6–8 pm</option>
                    <option>Cedar (Legacy Campus) — Mondays 6–8 pm</option>
                    <option>Shekinah (Legacy Campus) — Mondays 6–8 pm</option>
                    <option>Macademia (Legacy Campus) — Mondays 6–8 pm</option>
                    <option>Shabach (Main Campus) — Tuesdays 6–8 pm</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Sub-Cell dropdown */}
              <div className="space-y-1.5">
                <label className={`block text-xs font-semibold uppercase tracking-wider transition-colors duration-150 ${selectedCell ? "text-slate-500" : "text-slate-300"}`}>
                  Sub-Cell
                </label>
                <div className={`relative w-full sm:w-2/3 transition-opacity duration-150 ${selectedCell ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
                  <select
                    defaultValue=""
                    disabled={!selectedCell}
                    className="appearance-none w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-10 text-sm text-slate-800 font-medium shadow-sm
                      focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400
                      hover:border-slate-400 transition-all duration-150 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <option value="" disabled>Select a sub-cell…</option>
                    <option>Sub 1</option>
                    <option>Sub 2</option>
                    <option>Sub 3</option>
                    <option>Sub 4</option>
                    <option>Sub 5</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Register button */}
              <div className="pt-2">
                <button className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-md
                  hover:bg-slate-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500">
                  Register
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
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

export default CellRegisterCard;

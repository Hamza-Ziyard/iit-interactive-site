import React from "react";
import { meetTeamContent } from "../data/meetTeamContent";
import { Link } from 'react-router-dom'

export default function MeetTeam() {
  // Split into two sections
  const firstSection = meetTeamContent.slice(0, 3);
  const secondSection = meetTeamContent.slice(3);

  return (
    <div className="w-full px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Leadership</h1>

      {/* Section 1: First 3 people */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {firstSection.map((member, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center bg-white rounded-3xl py-16 px-6 border-2"
          >
            {/* {member.image && (
              <img
                src={member.image}
                alt={member.title}
                className="w-40 h-40 object-cover rounded-full mb-4"
              />
            )} */}
            <h2 className="text-xl font-semibold text-center">{member.title}</h2>
            <p className="text-sm text-gray-600 text-center">{member.position}</p>
            <Link className="text-sm text-blue-600 text-center">{member.email}</Link>
          </div>
        ))}
      </div>

      {/* Section 2: Next 6 people */}
      <h1 className="text-4xl font-bold mb-12 text-center">Level 4 Module Leaders</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {secondSection.map((member, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center bg-white rounded-3xl py-16 px-6 border-2"
          >
            {/* {member.image && (
              <img
                src={member.image}
                alt={member.title}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
            )} */}
            <h2 className="text-lg font-semibold text-center">{member.title}</h2>
            <p className="text-sm text-gray-600 text-center">{member.position}</p>
            <Link className="text-sm text-blue-600 text-center">{member.email}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { CalendarDays, Users, Check } from "lucide-react";

interface OrganizerCardProps {
  title?: string;
  name?: string;
  bio?: string;
  eventSeriesCount?: string;
  followersCount?: string;
  avatarLetter?: string;
  avatarImage?: string;
  verified?: boolean;
  onFollow?: () => void;
  onViewProfile?: () => void;
  className?: string;
}

export function OrganizerCard({
  title = "Meet the Organizer",
  name = "Elizabeth R Events",
  bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit justo a est pellentesque pulvinar.",
  eventSeriesCount = "24 Event Series",
  followersCount = "12.5k Followers",
  avatarLetter = "E",
  avatarImage,
  verified = true,
  onFollow,
  onViewProfile,
  className = "",
}: OrganizerCardProps) {
  return (
    <div
      className={`rounded-[20px] border border-[#ED5A2E] bg-[#121212] p-5 sm:p-6 text-white ${className}`}
    >
      {/* Title */}
      {title && (
        <h3 className="mb-4 text-sm sm:text-base font-bold text-white tracking-tight">
          {title}
        </h3>
      )}

      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Avatar */}
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full bg-white text-2xl sm:text-3xl font-light text-black shadow-md overflow-hidden">
          {avatarImage ? (
            <Image
              src={avatarImage}
              alt={name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          ) : (
            <span>{avatarLetter}</span>
          )}
        </div>

        {/* Info & Actions */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {name}
            </h4>
            {verified && (
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ED5A2E] text-[0.6rem] text-white">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </span>
            )}
          </div>

          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/75">
            {bio}
          </p>

          {/* Stats */}
          <div className="mt-3.5 flex flex-wrap items-center gap-4 text-xs font-medium text-white/90">
            <span className="inline-flex items-center gap-1.5 text-[#ED5A2E]">
              <CalendarDays className="h-3.5 w-3.5 text-[#ED5A2E]" />
              <span className="text-white/85">{eventSeriesCount}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#ED5A2E]">
              <Users className="h-3.5 w-3.5 text-[#ED5A2E]" />
              <span className="text-white/85">{followersCount}</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onFollow}
              className="rounded-xl bg-[#ED5A2E] px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#d4501f] active:scale-95"
            >
              Follow
            </button>
            <button
              type="button"
              onClick={onViewProfile}
              className="rounded-xl bg-[#ED5A2E] px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#d4501f] active:scale-95"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

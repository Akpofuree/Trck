export function ResendButton({ onClick, className = "" }: { onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#85D8E] hover:bg-[#76c2d1] px-4 py-2 rounded-full text-sm font-semibold text-white transition-colors ${className}`}
    >
      Resend
    </button>
  );
}

export function CancelButton({ onClick, className = "", children = "Cancel" }: { onClick?: () => void; className?: string; children?: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-semibold text-[#F3A3C] border border-[#F3A3C] bg-[#F3A3C]/20 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export function SaveButton({ onClick, className = "", children = "Save" }: { onClick?: () => void; className?: string; children?: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#ED5A2E] hover:bg-[#d4501f] text-white font-semibold transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export function RedButton({ onClick, className = "", children }: { onClick?: () => void; className?: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`text-[#F383C2] border border-[#F383C2] bg-black hover:bg-[#F383C2]/10 font-semibold transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

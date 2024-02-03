import React from "react";

export default function Footer() {
  return (
    <footer className="text-center px-4 mb-10 text-gray-500 text-xs">
      <small className="mb-2 block">
        &copy; 2024 Elena . All rights reserved.
      </small>
      <p>
        <small>
          About this website:{" "}
          <span className="font-semibold">
            built with React & Next.js (App Router & Server Actions),
            Typescript, Tailwind CSS, Framer Motion, React Email & Resend,
            Vercel hosting.
          </span>
        </small>
      </p>
    </footer>
  );
}

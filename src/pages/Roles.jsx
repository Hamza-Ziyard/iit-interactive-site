import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";

const Page = React.forwardRef(({ children, className }, ref) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-8 w-full h-full flex items-center justify-center ${className}`}
      ref={ref}
    >
      <div className="text-gray-800 text-lg leading-relaxed text-center">
        {children}
      </div>
    </div>
  );
});

export default function Roles() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 8; // cover + 6 content + back cover

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      

      <HTMLFlipBook
        width={400}
        height={550}
        size="stretch"
        minWidth={315}
        maxWidth={600}
        minHeight={400}
        maxHeight={800}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className={`rounded-xl transition-shadow duration-300 ${
          currentPage === 0 || currentPage === totalPages - 1
            ? "shadow-none"
            : "shadow-2xl"
        }`}
        onFlip={(e) => setCurrentPage(e.data)}
      >
        {/* --- COVER PAGE --- */}
        <Page className="bg-green-900 ">
            <div className="py-4 px-4">

        {/* <h1 className="text-white text-3xl font-bold mb-6">Common Guidelines</h1> */}
        <h1 className="text-white text-6xl leading-[1.2] tracking-wide font-bold mb-6">Roles & Responsibilities</h1>
            </div>
        </Page>

        {/* --- CONTENT PAGES --- */}
        <Page>Welcome to the Common Guidelines book.</Page>
        <Page>Guideline 1: Keep your design accessible.</Page>
        <Page>Guideline 2: Maintain consistency in UI elements.</Page>
        <Page>Guideline 3: Prioritize performance.</Page>
        <Page>Guideline 4: Provide clear navigation.</Page>
        <Page>Guideline 5: Ensure responsive design.</Page>

        {/* --- BACK COVER --- */}
        <Page className="bg-gray-800 text-white font-bold text-2xl">
          The End ✨
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

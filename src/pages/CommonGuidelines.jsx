import React from "react";
import HTMLFlipBook from "react-pageflip";
import { commonGuidelinesContent } from "../data/commonGuidelinesContent";

const Page = React.forwardRef(({ children, className }, ref) => (
  <div
    className={`bg-white shadow-lg rounded-lg border border-gray-200 p-8 w-full h-full flex items-center justify-center ${className}`}
    ref={ref}
  >
    <div className="text-gray-800 text-lg leading-relaxed text-left">{children}</div>
  </div>
));

export default function CommonGuidelines() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-6xl font-bold mb-16">Common Guidelines</h1>

      <HTMLFlipBook
        width={600}
        height={800}
        minWidth={600}
        maxWidth={900}
        minHeight={400}
        maxHeight={800}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        className="rounded-xl"
      >
        {commonGuidelinesContent.map((page, index) => (
          <Page key={index}>
            {page.type === "cover" && (
              <div className="rounded-3xl flex flex-col items-center gap-8 h-full">
                <img src={page.image} className="h-[400px] rounded-3xl" alt="" />
                <h1 className="text-4xl font-bold text-center px-5">{page.title}</h1>
              </div>
            )}

            {page.type === "text" &&
              page.items.map((item) => (
                <div key={item.number} className="rounded-3xl flex items-start gap-4 h-full mt-6">
                  <p className="mr-2 text-base font-bold">{item.number}</p>
                  <p className="text-base leading-[1.5] text-gray-600">{item.text}</p>
                </div>
              ))}
          </Page>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

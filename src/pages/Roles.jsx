import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { rolesContent } from "../data/rolesContent";

const Page = React.forwardRef(({ children, className, pageNumber, totalPages }, ref) => (
  <div
    className={`relative bg-white sbg-slate-50 shadow-2xl rounded-3xl border-8 border-green-900 p-8 w-full h-full flex flex-col justify-between ${className}`}
    ref={ref}
  >
    <div className="text-gray-800 text-lg leading-relaxed text-left flex-1">
      {children}
    </div>
    <div className="text-xs text-center text-gray-400 mt-4 absolute bottom-4 right-6">
      {pageNumber} of {totalPages}
    </div>
  </div>
));

export default function Roles() {
  const flipBook = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = rolesContent.length;

  return (
    <div className="w-full">
      {/* Desktop flipbook */}
      <div className="hidden md:flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold pt-16 mb-16">Roles</h1>

        <HTMLFlipBook
          width={600}
          height={750}
          minWidth={600}
          maxWidth={900}
          minHeight={400}
          maxHeight={800}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          flippingTime={500}
          className="rounded-xl"
          ref={flipBook}
          onFlip={(e) => setCurrentPage(e.data)}
        >
          {rolesContent.map((page, index) => (
            <Page key={index} pageNumber={index + 1} totalPages={totalPages}>
              {page.type === "cover" && (
                <div className="rounded-3xl flex flex-col items-center gap-8 h-full pb-8">
                  {page.image && (
                    <img
                      src={page.image}
                      className="max-h-[300px] w-auto object-contain rounded-full p-8 mt-24 bg-green-50"
                      alt=""
                    />
                  )}
                  <h1 className="text-4xl font-bold text-center px-10 leading-[1.5]">
                    {page.title}
                  </h1>
                </div>
              )}


        <div>

              <p className="text-gray-600 leading-[1.5] text-left text-sm">
                {page.para}
              </p>
        </div>
              {page.type === "text" &&
                page.items.map((item) => (
                  
                  <div
                    key={item.number}
                    className="flex items-start gap-2 h-full mt-6 border-t-[1.5px] px-4 pt-4"
                  >
                    <p className="mr-2 text-sm font-bold">{item.number}</p>
                    <p className="text-sm leading-[1.5] text-gray-600">
                      {item.text}
                    </p>

                  </div>
                ))}
            </Page>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Mobile list view */}
      <div className="flex flex-col w-full md:hidden gap-2 px-4 py-6">
        <h1 className="text-4xl font-bold mb-8 text-left">Common Guidelines</h1>
        {rolesContent.map((page, index) => (
          <div key={index} className="">
            {page.type === "cover" && (
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-2xl font-semibold text-left">{page.title}</h2>
              </div>
            )}

            {page.type === "text" &&
              page.items.map((item) => (
                <div key={item.number} className="flex flex-col gap-2 my-4 text-left">
                  <p className="font-bold">{item.number}</p>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}

          </div>
        ))}
      </div>
    </div>
  );
}

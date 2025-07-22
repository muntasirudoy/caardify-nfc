
"use client";
export const TemplateWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-center items-start">
      <div className="relative">
        <div className="w-[360px] h-[600px] bg-black rounded-[50px] p-3 shadow-xl">
          <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative">
            <div className="absolute top-0 left-1/2  transform -translate-x-1/2 w-32 h-6 bg-black z-40 rounded-b-2xl"></div>
            <div className="h-full  overflow-y-auto no-scrollbar overflow-x-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

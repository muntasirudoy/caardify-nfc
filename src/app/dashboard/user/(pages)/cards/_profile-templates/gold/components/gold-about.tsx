export const GoldAbout = ({
    title,
    icon,
    text,
  }: {
    title: string;
    icon: React.ReactNode;
    text: string;
  }) => {
    return (
      <div className="min-w-[310px] p-4">
        <h2 className="font-secondary"> {title}</h2>
        <div className=" bg-white font-secondary shadow-xl rounded-lg flex items-center py-3 gap-2 px-3 border-[1px]">
          <span className=" w-[40px] flex justify-center items-center h-[40px] bg-slate-100 rounded-full">
            {icon}
          </span>
          <p className=" break-words w-[160px]">{text}</p>
        </div>
      </div>
    );
  };
  
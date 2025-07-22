import { Download } from "lucide-react";

const mediaAssets = [
  {
    id: 1,
    title: "Black Logo",
    image: "/logos/black.png",
    downloadUrl: "/logos/black.png",
  },
  {
    id: 2,
    title: "White Logo",
    image: "/logos/off-w.png",
    downloadUrl: "/logos/off-w.png",
  },
  {
    id: 3,
    title: "Logo PNG",
    image: "/assets/logo.png",
    downloadUrl: "/assets/logo.png",
  },
  {
    id: 4,
    title: "Logo PNG",
    image: "/assets/logo.png",
    downloadUrl: "/assets/logo.png",
  },
];
const MediaKit = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center font-secondary">
        Caardify Media Kit
      </h1>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 font-secondary">Media Assets</h3>
        <p className="text-xl font-secondary font-medium md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
          By using this Site, I agree to its Terms & Conditions. All content
          downloaded from the Site (photography, audio, and video, etc.) may be
          used for editorial purposes only. Any other use of Site content,
          including, without limitation, personal or commercial use, is strictly
          prohibited.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {mediaAssets.map((asset) => (
          <div
            key={asset.id}
            className="rounded-2xl shadow-md p-4 bg-white dark:bg-muted flex flex-col items-center text-center"
          >
            <img
              src={asset.image}
              alt={asset.title}
              className="w-full h-40 object-contain rounded-lg mb-4 bg-white"
            />
            <div className="flex justify-between items-center w-full mt-2">
              <h3 className="font-semibold font-secondary text-lg truncate">{asset.title}</h3>
              <a
                href={asset.downloadUrl}
                className="inline-flex items-center gap-1 border-b-2 border-current hover:text-primary transition ml-4"
                download
              >
                <Download className="w-4 h-4" />
                <span className="font-secondary font-semibold text-base">Download</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaKit;

import { useEffect, useState } from "react";
import { listImages, deleteImage } from "../../../lib/cms";
import { ImageUpload } from "../components/ImageUpload";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Loader2, Trash2, Copy, CheckCheck } from "lucide-react";

interface ImageItem {
  name: string;
  url: string;
}

const FOLDERS = ["general", "home", "about", "services", "doctor"];

export function MediaLibrary() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [folder, setFolder] = useState("general");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    const result = await listImages(folder);
    setImages(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [folder]);

  const handleDelete = async (name: string) => {
    if (!confirm("Delete this image?")) return;
    setDeleting(name);
    await deleteImage(`${folder}/${name}`);
    setImages((prev) => prev.filter((img) => img.name !== name));
    setDeleting(null);
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Folder Tabs */}
      <div className="flex flex-wrap gap-2">
        {FOLDERS.map((f) => (
          <button
            key={f}
            onClick={() => setFolder(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors capitalize ${
              folder === f
                ? "bg-[#0046FF] text-white"
                : "border border-gray-200 text-gray-600 hover:border-[#0046FF] hover:text-[#0046FF]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Upload */}
      <Card className="border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold text-gray-700">Upload to /{folder}</h3>
        <ImageUpload
          label=""
          value=""
          onChange={() => fetchImages()}
          folder={folder}
        />
      </Card>

      {/* Images Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="animate-spin text-[#0046FF]" size={32} />
        </div>
      ) : images.length === 0 ? (
        <Card className="border border-gray-200 bg-white p-12 text-center shadow-sm">
          <p className="text-gray-400">No images in /{folder} yet.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img) => (
            <Card key={img.name} className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm">
              <img
                src={img.url}
                alt={img.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-2">
                <p className="truncate text-xs text-gray-500">{img.name}</p>
                <div className="mt-2 flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs px-2"
                    onClick={() => handleCopy(img.url)}
                  >
                    {copied === img.url ? (
                      <><CheckCheck size={12} className="mr-1 text-green-500" /> Copied</>
                    ) : (
                      <><Copy size={12} className="mr-1" /> Copy URL</>
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-2 text-red-500 hover:bg-red-50"
                    onClick={() => handleDelete(img.name)}
                    disabled={deleting === img.name}
                  >
                    {deleting === img.name ? (
                      <Loader2 className="animate-spin" size={14} />
                    ) : (
                      <Trash2 size={14} />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

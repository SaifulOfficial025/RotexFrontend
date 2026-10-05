import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropUtils";
import { FiCheck, FiX } from "react-icons/fi";

const ImageCropper = ({ imageSrc, onCropComplete, onCancel, aspect = 1 }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropCompleteInternal = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onCropComplete(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl overflow-hidden flex flex-col h-[80vh] shadow-2xl">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <h3 className="font-bold text-lg text-gray-900">Crop Image</h3>
          <button onClick={onCancel} className="text-gray-500 hover:text-red-500 transition-colors">
            <FiX size={24} />
          </button>
        </div>
        
        <div className="relative flex-1 bg-gray-900">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onCropComplete={onCropCompleteInternal}
            onZoomChange={setZoom}
          />
        </div>

        <div className="p-4 bg-white border-t border-gray-200 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-600">Zoom</span>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(e.target.value)}
              className="flex-1 accent-primary"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 border border-gray-300 font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-primary text-white font-bold hover:bg-black transition-colors flex items-center gap-2"
            >
              <FiCheck /> Apply Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;

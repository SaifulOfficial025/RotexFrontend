import React, { useState, useRef } from "react";
import ImageCropper from "./ImageCropper";
import { FiUploadCloud, FiX } from "react-icons/fi";

const ImageUploader = ({
  label,
  value,
  onChange,
  multiple = false,
  aspect = 1,
  disabled = false,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const MAX_SIZE_MB = 1.5;

  const onFileChange = (e) => {
    setError("");
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setError(`File size exceeds ${MAX_SIZE_MB}MB limit.`);
        fileInputRef.current.value = "";
        return;
      }
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setSelectedFile(reader.result)
      );
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedImageUrl) => {
    if (multiple) {
      onChange([...(value || []), croppedImageUrl]);
    } else {
      onChange(croppedImageUrl);
    }
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemove = (indexToRemove, e) => {
    e.stopPropagation();
    if (disabled) return;
    if (multiple) {
      onChange(value.filter((_, i) => i !== indexToRemove));
    } else {
      onChange(null);
    }
  };

  const values = multiple ? (value || []) : (value ? [value] : []);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-gray-700">
        {label}
      </label>
      <div className="text-xs text-gray-500 mb-2">
        Product image should be square size image. (Max: {MAX_SIZE_MB}MB)
      </div>

      <div className="flex flex-wrap gap-4">
        {values.map((imgUrl, index) => (
          <div key={index} className="relative w-32 h-32 border border-gray-200 overflow-hidden group bg-gray-50 flex-shrink-0">
            <img src={imgUrl} alt="Uploaded preview" className="w-full h-full object-cover" />
            {!disabled && (
              <button
                type="button"
                onClick={(e) => handleRemove(index, e)}
                className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
              >
                <FiX size={14} />
              </button>
            )}
          </div>
        ))}

        {!disabled && (!value || multiple) && (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-32 h-32 border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-primary cursor-pointer transition-all flex flex-col items-center justify-center text-gray-400 hover:text-primary flex-shrink-0"
          >
            <FiUploadCloud size={24} className="mb-2" />
            <span className="text-xs font-bold text-center px-2">Upload Photo</span>
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-xs font-bold mt-1">{error}</p>}

      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        accept="image/jpeg, image/png, image/webp"
        className="hidden"
      />

      {selectedFile && (
        <ImageCropper
          imageSrc={selectedFile}
          aspect={aspect}
          onCropComplete={handleCropComplete}
          onCancel={() => {
            setSelectedFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
          }}
        />
      )}
    </div>
  );
};

export default ImageUploader;

"use client";
import React, { useState } from "react";
import { FiX, FiPaperclip, FiSend } from "react-icons/fi";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function EmailModal({ isOpen, onClose }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [attachments, setAttachments] = useState([]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments((prev) => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = () => {
    // In a real app, you would send this to the backend
    console.log("Sending email to all subscribers:", { subject, body, attachments });
    alert("Email sent successfully!");
    setSubject("");
    setBody("");
    setAttachments([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-4xl flex flex-col max-h-[90vh] shadow-2xl rounded-sm">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Send Email to All Subscribers</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <FiX size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter email subject"
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
            <div className="bg-white pb-12">
              <ReactQuill 
                theme="snow" 
                value={body} 
                onChange={setBody} 
                className="h-64"
                placeholder="Write your email here..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Attachments</label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors border border-gray-300 font-medium text-sm">
                <FiPaperclip size={16} />
                <span>Add Files</span>
                <input type="file" multiple className="hidden" onChange={handleFileChange} />
              </label>
              <span className="text-xs text-gray-500">Max size: 5MB per file</span>
            </div>
            {attachments.length > 0 && (
              <ul className="mt-3 space-y-2">
                {attachments.map((file, i) => (
                  <li key={i} className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-200 text-sm">
                    <span className="truncate flex-1 font-medium">{file.name}</span>
                    <button onClick={() => removeAttachment(i)} className="text-red-500 hover:text-red-700 p-1 ml-2">
                      <FiX size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-4 bg-gray-50">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 font-bold hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSend}
            disabled={!subject || !body || body === '<p><br></p>'}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiSend size={16} />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}

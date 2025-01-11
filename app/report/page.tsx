'use client'

import { useState } from 'react'
import { Camera, Upload } from 'lucide-react'

export default function ReportPage() {
  const [description, setDescription] = useState('')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Report Environmental Issues</h1>
      <form className="space-y-6">
        <div>
          <label htmlFor="description" className="block mb-2 font-semibold">
            Description of the Issue
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the environmental issue you've observed..."
          ></textarea>
        </div>
        <div>
          <label htmlFor="location" className="block mb-2 font-semibold">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full p-2 border rounded"
            placeholder="Enter the location of the issue"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            Upload Images
          </label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            Take a Photo
          </label>
          <button type="button" className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
            <Camera className="w-5 h-5 mr-2" />
            Open Camera
          </button>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
          Submit Report
        </button>
      </form>
    </div>
  )
}



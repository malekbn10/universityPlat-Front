import React, { useState } from 'react';
import { Upload, Search, Trash2, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Document } from '../../types';
import { format } from 'date-fns';

export default function DocumentsPanel() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type === 'application/pdf'
    );
    
    if (files.length === 0) {
      alert('Please upload PDF files only');
      return;
    }
    
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const newDocuments: Document[] = files.map(file => ({
      id: crypto.randomUUID(),
      title: file.name,
      uploadDate: new Date(),
      fileSize: file.size,
      status: 'Pending'
    }));
    
    setDocuments([...documents, ...newDocuments]);

    // Simulate OCR processing
    newDocuments.forEach(doc => {
      setTimeout(() => {
        setDocuments(prevDocs => 
          prevDocs.map(d => 
            d.id === doc.id ? { ...d, status: 'Processing' } : d
          )
        );

        setTimeout(() => {
          setDocuments(prevDocs => 
            prevDocs.map(d => 
              d.id === doc.id ? { ...d, status: 'Completed' } : d
            )
          );
        }, 3000);
      }, 1000);
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this document?')) {
      setDocuments(documents.filter(doc => doc.id !== id));
      if (selectedDocument?.id === id) {
        setSelectedDocument(null);
      }
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Processing':
        return (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-500" />
        );
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Document Upload</h2>
          <p className="text-gray-600 mt-1">Upload and process orientation documents</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Documents</p>
            <p className="text-2xl font-semibold text-gray-900">{documents.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Processed</p>
            <p className="text-2xl font-semibold text-gray-900">
              {documents.filter(d => d.status === 'Completed').length}
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <AlertCircle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-semibold text-gray-900">
              {documents.filter(d => d.status !== 'Completed').length}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
            }`}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Drag and drop PDF files here, or click to select files
            </p>
            <input
              type="file"
              multiple
              accept=".pdf"
              onChange={(e) => handleFiles(Array.from(e.target.files || []))}
              className="hidden"
              id="file-upload"
            />
            <button
              onClick={() => document.getElementById('file-upload')?.click()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Select Files
            </button>
          </div>

          <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Uploaded Documents</h3>
            </div>
            <ul className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer ${
                    selectedDocument?.id === doc.id ? 'bg-indigo-50' : ''
                  }`}
                  onClick={() => setSelectedDocument(doc)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <Search className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="truncate">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {doc.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {format(doc.uploadDate, 'PP')} • {(doc.fileSize / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(doc.status)}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(doc.id);
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              {documents.length === 0 && (
                <li className="p-4 text-center text-gray-500">
                  No documents uploaded yet
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Document Preview</h3>
          {selectedDocument ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium text-gray-900">{selectedDocument.title}</h4>
                  <p className="text-sm text-gray-500">
                    Uploaded on {format(selectedDocument.uploadDate, 'PP')}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  selectedDocument.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : selectedDocument.status === 'Processing'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {selectedDocument.status}
                </span>
              </div>
              {selectedDocument.status === 'Completed' ? (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">
                    OCR processing completed. Extracted text would appear here.
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <AlertCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">
                    {selectedDocument.status === 'Processing'
                      ? 'OCR processing in progress...'
                      : 'Waiting to start OCR processing'}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2" />
              <p>Select a document to preview its content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
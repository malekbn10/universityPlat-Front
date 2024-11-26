export interface User {
    id: string;
    username: string;
    email: string;
    role: 'Admin' | 'User';
    status: 'Active' | 'Blocked';
  }
  
  export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    attendees: number;
  }
  
  export interface Document {
    id: string;
    title: string;
    uploadDate: Date;
    fileSize: number;
    status: 'Pending' | 'Processing' | 'Completed';
  }
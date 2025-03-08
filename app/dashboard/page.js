"use client"

import { useRouter } from 'next/navigation';

import {
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon,
  BellIcon,
  CalendarIcon,
  UserIcon,
  CogIcon,
  LogoutIcon,
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const router = useRouter();

  // Static student data
  const student = {
    name: 'Adeyemi Esther oluwayemisi',
    matricNumber: '23010231060',
    department: 'Computer Science',
    level: 'HND 2',
    profilePicture: '/pic.jpg', // Replace with actual image URL
    gpa: '3.70',
    attendance: '95%',
    semester: 'Second Semester 2023',
  };

  const courses = [
    { code: 'COM 401', title: 'Advanced Programming', progress: '85%' },
    { code: 'COM 402', title: 'Database Management', progress: '70%' },
    { code: 'COM 403', title: 'Software Engineering', progress: '90%' },
  ];

  const notifications = [
    { id: 1, message: 'Course registration ends on 2023-09-30', icon: BellIcon },
    { id: 2, message: 'Exam timetable released', icon: CalendarIcon },
    { id: 3, message: 'Payment deadline: 2023-10-15', icon: BellIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      {/* <div className="w-64 bg-blue-900 text-white p-6">
        <div className="flex items-center mb-8">
          <AcademicCapIcon className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Student Portal</h1>
        </div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center p-2 hover:bg-blue-800 rounded-lg">
            <UserIcon className="h-5 w-5 mr-2" />
            Profile
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-blue-800 rounded-lg">
            <BookOpenIcon className="h-5 w-5 mr-2" />
            Courses
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-blue-800 rounded-lg">
            <ChartBarIcon className="h-5 w-5 mr-2" />
            Results
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-blue-800 rounded-lg">
            <BellIcon className="h-5 w-5 mr-2" />
            Notifications
          </a>
          <a href="#" className="flex items-center p-2 hover:bg-blue-800 rounded-lg">
            <CogIcon className="h-5 w-5 mr-2" />
            Settings
          </a>
          <button
            onClick={() => router.push('/login')}
            className="flex items-center p-2 hover:bg-blue-800 rounded-lg w-full"
          >
            {/* <LogoutIcon className="h-5 w-5 mr-2" /> 
            Logout
          </button>
        </nav>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6 text-blue-900" />
            <img
              src={student.profilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center space-x-6">
            <img
              src={student.profilePicture}
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold text-blue-900">{student.name}</h2>
              <p className="text-gray-600">{student.matricNumber}</p>
              <p className="text-gray-600">{student.department}</p>
              <p className="text-gray-600">Level: {student.level}</p>
            </div>
          </div>
        </div>

        {/* Academic Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Current GPA</h3>
            <p className="text-2xl font-bold text-gray-800">{student.gpa}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Attendance</h3>
            <p className="text-2xl font-bold text-gray-800">{student.attendance}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Current Semester</h3>
            <p className="text-2xl font-bold text-gray-800">{student.semester}</p>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Enrolled Courses</h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.code} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900">{course.code} - {course.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: course.progress }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">Progress: {course.progress}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Notifications</h2>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                {/* <notification.icon className="h-6 w-6 text-blue-500 mr-4" /> */}
                <p className="text-gray-800">{notification.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
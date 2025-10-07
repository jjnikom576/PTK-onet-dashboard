// ข้อมูล O-NET โรงเรียนปากท่อพิทยาคม
// ปีการศึกษา 2565-2567

export const allYearsData = {
  m3: {
    2565: [
      { subject: 'ภาษาไทย', school: 43.81, province: 54.65, national: 52.95, gap: -10.84, students: 102 },
      { subject: 'อังกฤษ', school: 26.59, province: 32.20, national: 32.05, gap: -5.61, students: 102 },
      { subject: 'คณิตศาสตร์', school: 19.30, province: 24.34, national: 24.39, gap: -5.04, students: 101 },
      { subject: 'วิทยาศาสตร์', school: 28.67, province: 33.92, national: 33.32, gap: -5.25, students: 102 }
    ],
    2566: [
      { subject: 'ภาษาไทย', school: 42.45, province: 50.66, national: 50.73, gap: -8.21, students: 83 },
      { subject: 'อังกฤษ', school: 24.85, province: 30.56, national: 31.76, gap: -5.71, students: 82 },
      { subject: 'คณิตศาสตร์', school: 20.33, province: 24.03, national: 25.38, gap: -3.70, students: 83 },
      { subject: 'วิทยาศาสตร์', school: 26.19, province: 29.59, national: 30.00, gap: -3.40, students: 82 }
    ],
    2567: [
      { subject: 'ภาษาไทย', school: 40.87, province: 50.66, national: 48.93, gap: -9.79, students: 90 },
      { subject: 'อังกฤษ', school: 27.74, province: 30.86, national: 30.93, gap: -3.12, students: 89 },
      { subject: 'คณิตศาสตร์', school: 22.77, province: 26.99, national: 26.53, gap: -4.22, students: 90 },
      { subject: 'วิทยาศาสตร์', school: 28.34, province: 34.55, national: 34.22, gap: -6.21, students: 89 }
    ]
  },
  m6: {
    2565: [
      { subject: 'ภาษาไทย', school: 37.79, province: 44.26, national: 44.09, gap: -6.47, students: 53 },
      { subject: 'สังคม', school: 29.24, province: 32.84, national: 33.00, gap: -3.60, students: 63 },
      { subject: 'อังกฤษ', school: 20.65, province: 23.60, national: 23.44, gap: -2.95, students: 62 },
      { subject: 'คณิตศาสตร์', school: 18.97, province: 21.50, national: 21.61, gap: -2.53, students: 62 },
      { subject: 'วิทยาศาสตร์', school: 26.39, province: 28.67, national: 28.08, gap: -2.28, students: 55 }
    ],
    2566: [
      { subject: 'ภาษาไทย', school: 32.62, province: 41.21, national: 40.78, gap: -8.59, students: 14 },
      { subject: 'สังคม', school: 26.23, province: 33.44, national: 33.09, gap: -7.21, students: 14 },
      { subject: 'อังกฤษ', school: 23.65, province: 26.65, national: 26.19, gap: -3.00, students: 14 },
      { subject: 'คณิตศาสตร์', school: 15.58, province: 20.42, national: 19.96, gap: -4.84, students: 13 },
      { subject: 'วิทยาศาสตร์', school: 28.76, province: 29.31, national: 29.09, gap: -0.55, students: 14 }
    ],
    2567: [
      { subject: 'ภาษาไทย', school: 35.28, province: 42.51, national: 42.21, gap: -7.23, students: 81 },
      { subject: 'สังคม', school: 34.44, province: 36.43, national: 35.77, gap: -1.99, students: 81 },
      { subject: 'อังกฤษ', school: 25.50, province: 29.45, national: 30.61, gap: -3.95, students: 81 },
      { subject: 'คณิตศาสตร์', school: 21.50, province: 22.24, national: 21.76, gap: -0.74, students: 81 },
      { subject: 'วิทยาศาสตร์', school: 30.25, province: 29.49, national: 28.95, gap: 0.76, students: 81 }
    ]
  }
};

export const trendData = {
  m3_thai: [
    { year: '2565', school: 43.81, province: 54.65, national: 52.95 },
    { year: '2566', school: 42.45, province: 50.66, national: 50.73 },
    { year: '2567', school: 40.87, province: 50.66, national: 48.93 }
  ],
  m3_english: [
    { year: '2565', school: 26.59, province: 32.20, national: 32.05 },
    { year: '2566', school: 24.85, province: 30.56, national: 31.76 },
    { year: '2567', school: 27.74, province: 30.86, national: 30.93 }
  ],
  m3_math: [
    { year: '2565', school: 19.30, province: 24.34, national: 24.39 },
    { year: '2566', school: 20.33, province: 24.03, national: 25.38 },
    { year: '2567', school: 22.77, province: 26.99, national: 26.53 }
  ],
  m3_science: [
    { year: '2565', school: 28.67, province: 33.92, national: 33.32 },
    { year: '2566', school: 26.19, province: 29.59, national: 30.00 },
    { year: '2567', school: 28.34, province: 34.55, national: 34.22 }
  ],
  m6_thai: [
    { year: '2565', school: 37.79, province: 44.26, national: 44.09 },
    { year: '2566', school: 32.62, province: 41.21, national: 40.78 },
    { year: '2567', school: 35.28, province: 42.51, national: 42.21 }
  ],
  m6_social: [
    { year: '2565', school: 29.24, province: 32.84, national: 33.00 },
    { year: '2566', school: 26.23, province: 33.44, national: 33.09 },
    { year: '2567', school: 34.44, province: 36.43, national: 35.77 }
  ],
  m6_english: [
    { year: '2565', school: 20.65, province: 23.60, national: 23.44 },
    { year: '2566', school: 23.65, province: 26.65, national: 26.19 },
    { year: '2567', school: 25.50, province: 29.45, national: 30.61 }
  ],
  m6_math: [
    { year: '2565', school: 18.97, province: 21.50, national: 21.61 },
    { year: '2566', school: 15.58, province: 20.42, national: 19.96 },
    { year: '2567', school: 21.50, province: 22.24, national: 21.76 }
  ],
  m6_science: [
    { year: '2565', school: 26.39, province: 28.67, national: 28.08 },
    { year: '2566', school: 28.76, province: 29.31, national: 29.09 },
    { year: '2567', school: 30.25, province: 29.49, national: 28.95 }
  ]
};

export const studentAnalysis = {
  m3: { 2565: 102, 2566: 83, 2567: 90 },
  m6: { 2565: 55, 2566: 14, 2567: 81 }
};

export const schoolInfo = {
  name: 'โรงเรียนปากท่อพิทยาคม',
  code: '1070012002',
  province: 'ราชบุรี',
  region: 'ตะวันตก',
  years: [2565, 2566, 2567]
};

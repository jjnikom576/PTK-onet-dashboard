import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { allYearsData, trendData, studentAnalysis, schoolInfo } from './data/onetData';
import StatCard from './components/StatCard';
import GaugeChart from './components/GaugeChart';
import './Dashboard.css';

const OnetDashboard = () => {
  const [selectedLevel, setSelectedLevel] = useState('m3');

  const radarDataCombined = allYearsData[selectedLevel][2565].map((item, idx) => ({
    subject: item.subject,
    '2565': allYearsData[selectedLevel][2565][idx].school,
    '2566': allYearsData[selectedLevel][2566][idx].school,
    '2567': allYearsData[selectedLevel][2567][idx].school
  }));

  const currentData = allYearsData[selectedLevel][2567];
  const avgSchool = (currentData.reduce((sum, item) => sum + item.school, 0) / currentData.length).toFixed(2);
  const avgProvince = (currentData.reduce((sum, item) => sum + item.province, 0) / currentData.length).toFixed(2);
  const avgGap = (avgSchool - avgProvince).toFixed(2);

  const currentStudents = studentAnalysis[selectedLevel][2567];
  const prevStudents = studentAnalysis[selectedLevel][2566];
  const studentChange = currentStudents - prevStudents;
  const studentChangePercent = ((studentChange / prevStudents) * 100).toFixed(1);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        
        {/* Header */}
        <div className="section-card" style={{ marginTop: 0, borderTop: '4px solid #3b82f6' }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-600 text-white rounded-xl p-3 text-3xl">📊</div>
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">O-NET Analysis Dashboard</h1>
              <p className="text-lg text-gray-600 mt-1">{schoolInfo.name} จังหวัด{schoolInfo.province}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-2 inline-block">
            📅 ข้อมูลปีการศึกษา {schoolInfo.years.join('-')} ({schoolInfo.years.length} ปีย้อนหลัง)
          </p>
        </div>

        {/* Controls */}
        <div className="section-card">
          <label className="block text-sm font-bold text-gray-700 mb-3">🎯 เลือกระดับชั้นที่ต้องการดู</label>
          <div className="flex gap-4">
            <button onClick={() => setSelectedLevel('m3')} className={`flex-1 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${selectedLevel === 'm3' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'}`}>
              📚 มัธยมศึกษาปีที่ 3
            </button>
            <button onClick={() => setSelectedLevel('m6')} className={`flex-1 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${selectedLevel === 'm6' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'}`}>
              🎓 มัธยมศึกษาปีที่ 6
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid-4">
          <StatCard title="คะแนนเฉลี่ยโรงเรียน" value={avgSchool} subtitle={`${selectedLevel === 'm3' ? 'ม.3' : 'ม.6'} ทุกวิชารวม (2567)`} color="#3b82f6" />
          <StatCard title="คะแนนเฉลี่ยจังหวัด" value={avgProvince} subtitle="ค่าเปรียบเทียบมาตรฐาน" color="#8b5cf6" />
          <StatCard title="ส่วนต่าง (Gap)" value={avgGap} subtitle={avgGap < 0 ? 'ต่ำกว่าจังหวัด' : 'สูงกว่าจังหวัด'} color={avgGap < 0 ? '#ef4444' : '#10b981'} />
          <StatCard title="จำนวนนักเรียน" value={currentStudents} subtitle="ปีการศึกษา 2567" trend={studentChange} color="#f59e0b" />
        </div>

        {/* Student Analysis */}
        <div className="section-card">
          <div className="section-header">
            <span className="header-icon">👥</span>
            <h2>การวิเคราะห์จำนวนนักเรียน</h2>
          </div>
          <div className="grid-3">
            {schoolInfo.years.map((year, idx) => {
              const students = studentAnalysis[selectedLevel][year];
              const colors = ['from-blue-500 to-blue-600', 'from-purple-500 to-purple-600', 'from-green-500 to-green-600'];
              return (
                <div key={year} className={`student-card bg-gradient-to-br ${colors[idx]}`}>
                  <p className="text-sm font-semibold opacity-90 mb-2">📅 ปีการศึกษา {year}</p>
                  <p className="text-5xl font-extrabold mb-2">{students}</p>
                  <p className="text-lg font-medium">นักเรียนเข้าสอบ</p>
                  {year === 2566 && selectedLevel === 'm6' && students < 20 && (
                    <div className="mt-3 bg-yellow-400 text-yellow-900 rounded-lg px-3 py-2 text-xs font-bold">⚠️ ข้อมูลอาจไม่แม่นยำ</div>
                  )}
                  {year === 2567 && (
                    <div className={`mt-3 rounded-lg px-3 py-2 text-sm font-semibold ${studentChange > 0 ? 'bg-white/20' : 'bg-black/20'}`}>
                      {studentChange > 0 ? '↑' : '↓'} {Math.abs(studentChange)} คน ({studentChangePercent}%)
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="insight-box">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-yellow-700 text-base">💡 Insight:</strong> {selectedLevel === 'm6' && studentAnalysis[selectedLevel][2566] === 14 ? 'ปี 2566 มีนักเรียนเพียง 14 คน ทำให้ข้อมูลอาจมีความผันผวนสูง การเพิ่มขึ้นเป็น 81 คนในปี 2567 (+467%) ทำให้ข้อมูลมีความน่าเชื่อถือมากขึ้น' : `จำนวนนักเรียนปี 2567 ${studentChange > 0 ? 'เพิ่มขึ้น' : 'ลดลง'} ${Math.abs(studentChangePercent)}% จากปีที่แล้ว`}
            </p>
          </div>
        </div>

        {/* Gauge Charts */}
        <div className="section-card">
          <div className="section-header">
            <span className="header-icon" style={{background: 'linear-gradient(135deg, #10b981, #14b8a6)'}}>📈</span>
            <h2>คะแนนแต่ละวิชา ปี 2567 - {selectedLevel === 'm3' ? 'ม.3' : 'ม.6'}</h2>
          </div>
          <div className="gauge-grid">
            {currentData.map((item, idx) => (
              <GaugeChart key={idx} value={item.school} max={100} title={item.subject} color={item.gap >= 0 ? '#10b981' : item.gap > -3 ? '#f59e0b' : '#ef4444'} />
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="section-card">
          <div className="section-header">
            <span className="header-icon" style={{background: 'linear-gradient(135deg, #ec4899, #f43f5e)'}}>📊</span>
            <h2>เปรียบเทียบคะแนน 3 ปี</h2>
          </div>
          <div className="spacing-relaxed">
            {schoolInfo.years.map(year => (
              <div key={year} className="year-section">
                <div className="year-header">
                  <h3 className="text-xl font-bold text-gray-800">ปีการศึกษา {year}</h3>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">👨‍🎓 {studentAnalysis[selectedLevel][year]} คน</span>
                </div>
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={allYearsData[selectedLevel][year]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6b7280' }} />
                      <YAxis domain={[0, 60]} tick={{ fontSize: 12, fill: '#6b7280' }} />
                      <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                      <Legend wrapperStyle={{ paddingTop: '20px' }} />
                      <Bar dataKey="school" fill="#3b82f6" name="โรงเรียน" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="province" fill="#8b5cf6" name="จังหวัด" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="national" fill="#6b7280" name="ประเทศ" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gap Analysis */}
        <div className="section-card">
          <div className="section-header">
            <span className="header-icon" style={{background: 'linear-gradient(135deg, #ef4444, #f97316)'}}>🎯</span>
            <h2>ส่วนต่าง (Gap) - ปี 2567</h2>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6b7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
                <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="gap" name="ห่างจากจังหวัด" radius={[8, 8, 0, 0]}>
                  {currentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.gap >= 0 ? '#10b981' : '#ef4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar */}
        <div className="section-card">
          <div className="section-header">
            <span className="header-icon" style={{background: 'linear-gradient(135deg, #06b6d4, #3b82f6)'}}>🕸️</span>
            <h2>Radar - เปรียบเทียบ 3 ปี</h2>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarDataCombined}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 60]} />
                <Radar name="2565" dataKey="2565" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                <Radar name="2566" dataKey="2566" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Radar name="2567" dataKey="2567" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trends */}
        <div className="section-card">
          <div className="section-header">
            <span className="header-icon" style={{background: 'linear-gradient(135deg, #a855f7, #6366f1)'}}>📈</span>
            <h2>แนวโน้ม 3 ปี</h2>
          </div>
          <div className="grid-2">
            {Object.entries(trendData).filter(([key]) => key.startsWith(selectedLevel)).map(([key, data]) => {
              const subjectName = key.includes('thai') ? 'ภาษาไทย' : key.includes('math') ? 'คณิตศาสตร์' : key.includes('english') ? 'ภาษาอังกฤษ' : key.includes('social') ? 'สังคมศึกษา' : 'วิทยาศาสตร์';
              const trend = data[2].school - data[0].school;
              const trendPercent = ((trend / data[0].school) * 100).toFixed(1);
              return (
                <div key={key} className="trend-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{subjectName}</h3>
                    <div className={`px-4 py-2 rounded-full text-sm font-bold ${trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {trend > 0 ? '✅ พัฒนา' : '⚠️ ลดลง'}
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" />
                      <YAxis domain={[0, 'auto']} />
                      <Tooltip />
                      <Line type="monotone" dataKey="school" stroke="#3b82f6" strokeWidth={3} />
                      <Line type="monotone" dataKey="province" stroke="#8b5cf6" strokeWidth={2} />
                      <Line type="monotone" dataKey="national" stroke="#6b7280" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className={`text-center mt-2 font-bold ${trend > 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {trend > 0 ? '↑' : '↓'} {Math.abs(trend).toFixed(2)} คะแนน ({trendPercent}%)
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Insights */}
        <div className="insights-section">
          <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
            <span className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">💡</span>
            Key Insights - {selectedLevel === 'm3' ? 'ม.3' : 'ม.6'}
          </h2>
          <div className="insights-grid">
            <div className="insight-card">
              <h3 className="font-bold text-xl mb-3">✅ จุดแข็ง</h3>
              <ul className="space-y-2 text-sm">
                {selectedLevel === 'm3' ? (
                  <>
                    <li>• คณิตศาสตร์พัฒนาขึ้น +18%</li>
                    <li>• ภาษาอังกฤษฟื้นตัวในปี 2567</li>
                    <li>• จำนวนนักเรียนกลับมาปกติ</li>
                  </>
                ) : (
                  <>
                    <li>• วิทย์สูงกว่าจังหวัด +0.76</li>
                    <li>• คณิตฟื้นตัวแรง +5.92</li>
                    <li>• นักเรียนเพิ่มขึ้น 467%</li>
                  </>
                )}
              </ul>
            </div>
            <div className="insight-card">
              <h3 className="font-bold text-xl mb-3">⚠️ ต้องพัฒนา</h3>
              <ul className="space-y-2 text-sm">
                {selectedLevel === 'm3' ? (
                  <>
                    <li>• ภาษาไทยลดลงต่อเนื่อง -6.7%</li>
                    <li>• ห่างจากจังหวัด -9.79</li>
                    <li>• วิทย์ยังต่ำกว่า 2565</li>
                  </>
                ) : (
                  <>
                    <li>• ภาษาไทยต่ำกว่าจังหวัด -7.23</li>
                    <li>• อังกฤษยังห่างมาก -3.95</li>
                    <li>• ปี 2566 มีนักเรียนน้อยมาก</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="dashboard-footer">
          <p className="font-semibold mb-2">📅 ข้อมูล ณ ปีการศึกษา {schoolInfo.years.join('-')} | 🏫 {schoolInfo.name} จังหวัด{schoolInfo.province}</p>
          <p className="text-sm text-gray-500">จำนวนผู้เข้าสอบ: ม.3 (2565: 102, 2566: 83, 2567: 90 คน) | ม.6 (2565: 55, 2566: 14, 2567: 81 คน)</p>
          <p className="text-xs text-gray-400 mt-2">⚡ Powered by React + Vite + Recharts</p>
        </div>

      </div>
    </div>
  );
};

export default OnetDashboard;

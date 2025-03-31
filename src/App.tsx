import React from 'react';
import { Github, Mail, Code2, Briefcase, User, ChevronDown, GraduationCap, Award, Notebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">김하은</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">꾸준히 성장하는 풀스택 개발자</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.notion.so/16367014f9cb4af6950355297639a01b?pvs=4" className="text-white hover:text-blue-400 transition-colors">
              <Notebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="./src/assets/취업사진.png" 
                alt="Profile" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <User className="text-blue-600" />
                About Me
              </h2>
              <p className="text-gray-600 mb-6">
              6개월의 AI 활용 웹개발 교육 커리큘럼을 통해 웹/앱 개발 전반에 대한 이해도를 높이고 SI 스타트업에서 커리어를 시작하였습니다. RAG를 활용한 LAM, LTM 기술 연구 개발 업무를 담당하여 인공지능을 연구하고 활용하는 웹 개발자로 성장하고 있습니다.
              </p>
              <p className="text-gray-600 mb-6">
                React, Node.js, TypeScript를 주력으로 사용하며, 사용자 경험을 최우선으로 생각하는 개발을 지향합니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-gray-600">Node.js, Express, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 justify-center">
            <Code2 className="text-blue-600" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={`https://images.unsplash.com/photo-151713419191118-9d595e4c8c2b?auto=format&fit=crop&q=80`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">프로젝트 {project}</h3>
                  <p className="text-gray-600 mb-4">
                    React와 TypeScript를 활용한 웹 애플리케이션 프로젝트입니다.
                    사용자 경험을 최우선으로 고려하여 개발했습니다.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">React</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">TypeScript</span>
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <Notebook size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 justify-center">
            <Award className="text-blue-600" />
            Certifications
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              "정보처리기사(2024.11)",
              "SQLD(2025.03)",
              "빅데이터분석기사(20214.12)",
              "ADsP(2023.09)",
              "AI 900(2024.11)",
              "컴퓨터활용능력1급(2022.08)",
              "식품기사(2022.04)",
              "토익 TOEIC (960 score)"

            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 justify-center">
            <GraduationCap className="text-blue-600" />
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">인공지능사관학교</h3>
              <p className="text-gray-500 mb-4">AI 서비스 웹 개발 Spring 과정</p>
              <p className="text-gray-600">
                Spring Framework를 활용한 웹 서비스 개발과 AI 기술 접목에 대한 심도있는 학습을 진행했습니다.
                실무 중심의 프로젝트를 통해 실제 서비스 개발 경험을 쌓았습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 justify-center">
            <Briefcase className="text-blue-600" />
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                company: "(주)레피소드",
                position: "기획, R&D",
                period: "2025 - Present",
                description: "AI 활용 웹 서비스 기술 연구 개발 및 사업 기획"
              },
              {
                company: "전남대학교 산학합력단",
                position: "인증심사원",
                period: "2023 - 2024",
                description: "인증심사 검증 업무 및 시스템 관리"
              }
            ].map((exp, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <p className="text-lg text-gray-600 mb-1">{exp.position}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.notion.so/16367014f9cb4af6950355297639a01b?pvs=4" className="hover:text-blue-400 transition-colors">
              <Notebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 김하은. All rights reserved. </p>
          <p className="text-gray-600">phone) 010-8192-7749    |    e-mail) 1_myheun@naver.com </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
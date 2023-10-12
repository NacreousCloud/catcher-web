import { GetStaticPaths, GetStaticProps } from "next";

const aboutMe = () => {
  return (
    <div className="w-full h-full">
      <div className="w-3/4 h-full m-auto  flex flex-row gap-5 mt-5">
        <div className="w-1/3">
          <div className="rounded bg-zinc-100 w-full p-5 mb-10">
            <span>김강현</span>
            <p>문제해결을 좋아하는 개발자</p>
            <p>bebekh1216@gmail.com</p>
          </div>
          <div className="rounded bg-zinc-100 w-full p-5 my-10">
            <span className="title">기술스택</span>
            <div className="">
              <span className="badge bg-yellow-300">javascript</span>
              <span className="badge bg-blue-400">typescript</span>
              <span className="badge bg-green-500">nodejs</span>
              <span className="badge bg-cyan-400">react.js</span>
              <span className="badge bg-black text-white">nextjs</span>
              <span className="badge bg-orange-400">Ubuntu</span>
              <span className="badge bg-blue-500 ">python</span>
              <span className="badge bg-sky-500">docker</span>
              <span className="badge bg-pink-400">css/scss</span>
              <span className="badge bg-cyan-200">tailwind</span>
              <span className="badge bg-blue-950 text-white">AWS</span>
              <span className="badge bg-blue-400">recoil</span>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-full rounded bg-zinc-100 p-5">
          <div className="resume-box">
            <span className="title">Experience</span>
            <div>
              {/* TODO: 업무경험 컴포넌트 추가 */}
              <article></article>
            </div>
          </div>
          <div className="resume-box">
            <span className="title">Education</span>
            <div className="pt-5">
              {/* TODO: 학력 item 컴포넌트 추가 */}
              <article className="grid grid-cols-4">
                <div className="col-span-1">2014-03 ~ 2018-02</div>
                <div className="col-span-3">
                  <h3>동서대학교</h3>
                  <h5 className="text-sm">정보통신공학 전공</h5>
                  <h5 className="text-sm">4.17 / 4.5</h5>
                </div>
              </article>
              {/* <article>
                <div>2020-02 ~ 2020-12</div>
                <div>
                  <h3>삼성청년 소프트웨어 아카데미 3기 이수</h3>
                  <h5>교육 주관: 멀티캠퍼스</h5>
                  <h5>내부 공모전 은상 수상</h5>
                  <h5></h5>
                  <h5>JAVA 객체지향 프로그래밍 학습</h5>
                  <h5>JavaScript, Vue.js Frontend 웹 개발 학습</h5>
                  <h5>Spring boot, JPA 활용 Backend 웹 개발 학습</h5>
                  <h5>프로젝트 :</h5>
                  <h5>
                    이거모임 (온라인 모임관리 플랫폼) 2020.07.13 ~ 2020. 08. 21
                  </h5>
                  <h5>
                    OMO (사용자 인식 자동 명부입력 서비스) 2020.08.31 ~ 2020.
                    10. 08
                  </h5>
                  <h5>
                    리코타 보드 (실시간 동기화 협업 보드) 2020.10.12 ~ 2020. 11.
                    27
                  </h5>
                </div>
              </article> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default aboutMe;

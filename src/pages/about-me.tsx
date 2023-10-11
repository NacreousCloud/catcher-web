import { GetServerSideProps } from "next";

const aboutMe = () => {
  return (
    <div className="w-full h-full">
      <div className="w-3/4 h-full m-auto  flex flex-row gap-5 mt-5">
        <div className="w-1/3">
          <div className="rounded bg-zinc-300 w-full p-5 mb-10">
            <span>김강현</span>
            <p>문제해결을 좋아하는 개발자</p>
            <p>bebekh1216@gmail.com</p>
          </div>
          <div className="rounded bg-zinc-300 w-full p-5 my-10">
            <span>기술스택</span>
            <div className="">
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                javascript
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                typescript
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                nodejs
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                react.js
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                nextjs
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                Ubuntu
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                python
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                docker
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                css/scss
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                tailwind
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                AWS
              </span>
              <span className=" border-black border-2 rounded-xl m-1 inline-block px-2">
                recoil
              </span>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full rounded bg-zinc-300 p-5">
          <div>
            <span>Experience</span>
            <div>
              <article></article>
            </div>
          </div>
          <div>
            <span>Education</span>
            <div>
              <article>
                <div>2014-03 ~ 2018-02</div>
                <div>
                  <h3>동서대학교</h3>
                  <h5>정보통신공학 전공</h5>
                  <h5>4.17 / 4.5</h5>
                </div>
              </article>
              <article>
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
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default aboutMe;

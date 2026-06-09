import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.typing}>
            <h1 className={styles.title}>About Me</h1>
          </div>
          <div className={styles.description}>
            {/* Hi! My name is Eunji Lee. */}
            안녕하세요. 5년차 개발자 이은지입니다.
            <br />
            {/* I am a Backend Developer with over 4 years of experience in Korea
            and a graduate of the Mobile Application Design and Development
            program at Algonquin College. <br />
            I have built a diverse range of projects across web and mobile
            platforms. */}
            한국에서 4년 이상의 Java를 이용한 백엔드 개발 경력과 캐나다
            Algonquin College에서 Mobile Application Design and Development를
            Honours로 졸업했습니다. 유학을 통해 앱 개발과 프론트엔드 역량을
            확장하였고, UI/UX 디자인부터 마케팅 관점까지 폭넓게 학습하여 서비스
            라이프사이클을 전체적으로 이해하는 개발자로 성장했습니다. <br />
            기획자, 디자이너의 언어를 이해하고 소통하며 비즈니스 목표를 기술로
            구현해 낼 개발자가 되겠습니다.
            {/* <br /> Currently, I am dedicated to growing into a developer whom
            everyone enjoys working with, combining technical excellence with a
            collaborative mindset. */}
            <br />
          </div>
        </div>
        <div>
          <img src="/image/avatar.png" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

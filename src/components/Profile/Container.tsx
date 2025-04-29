import Card from "../Card/Card";
import styles from "./profile.module.css";
import next from "../../assets/Next.js.svg";
import django from "../../assets/Django.svg";
import react from "../../assets/React.svg";
import python from "../../assets/Python.svg";
import tailwind from "../../assets/Tailwind CSS.svg";
import vite from "../../assets/Vite.js.svg";
import figma from "../../assets/Figma.svg";
import git from "../../assets/Git.svg";
import ps from "../../assets/PostgresSQL.svg";
import linux from "../../assets/Linux.svg";
import ts from "../../assets/TypeScript.svg";

const Container = () => {
  return (
    <div className={styles.profile_container}>
      <Card isLeft>
        <div className={styles.profile_img_container}>
          <img className={styles.profile_img} src={"/Screenshot 2025-04-22 142535.png"}></img>
          <a target="_blank" href="https://www.linkedin.com/in/che-overmeyer-1632a394/">
            <svg className={styles.social_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </a>
          <a target="_blank" href="https://github.com/Cheplusplus">
            <svg className={styles.social_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px">
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
            </svg>
          </a>
        </div>
        <h2 className={styles.profile_heading}>SOFTWARE DEVELOPER</h2>
        <p>
          Full-stack web developer and instructor specializing in JavaScript, Python, and modern frameworks like Next.js and Django. I build scalable applications, lead development teams, and create technical content focused on clean code, great UX,
          and real-world problem-solving.
        </p>
      </Card>
      <Card>
        <h2 className={styles.profile_heading2}>PREFERED TECH</h2>
        <div className={styles.icon_container}>
          <img src={ts} />
          <img src={next} />
          <img src={react} />
          <img src={python} />
          <img src={django} />
          <img src={tailwind} />
          <img src={figma} />
          <img src={vite} />
          <img src={ps} />
          <img src={git} />
          <img src={linux} />
        </div>
      </Card>
      <Card isLeft>
        <h2 className={styles.profile_heading2}>EXPERIENCE</h2>
        <ul className={styles.experience_list}>
          <li>
            <h3 className={styles.experience_heading}>CODESPACE ACADEMY</h3>
            <ul className={styles.list}>
              <li>
                <p>Led and mentored development teams, guiding students through real-world projects like building e-commerce stores with Next.js and modern web stacks.</p>
              </li>
              <li>
                <p>Designed and delivered technical course content, covering topics such as full-stack development, software architecture, and best coding practices.</p>
              </li>
              <li>
                <p>Conducted technical interviews and assessments to evaluate student readiness, giving actionable feedback to help them grow into professional developers.</p>
              </li>
              <li>
                <p>Introduced students to CI/CD pipelines and DevOps fundamentals, helping them understand the full software lifecycle beyond just writing code.</p>
              </li>
              <li>
                <p>Managed and supported a team of coaches, fostering collaboration, improving teaching standards, and ensuring a high-quality learning experience for all students.</p>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={styles.experience_heading}>SKILLADEMIA</h3>
            <ul className={styles.list}>
              <li>
                <p>Produced and recorded programming course content, making complex technical topics accessible for learners of all levels.</p>
              </li>
              <li>
                <p>Created educational resources like slide decks, coding examples, and quizzes to reinforce learning and improve course engagement.</p>
              </li>
              <li>
                <p>Wrote clear, concise technical scripts, ensuring explanations were accurate, beginner-friendly, and aligned with industry standards.</p>
              </li>
              <li>
                <p>Researched and incorporated current tech trends, keeping course material up-to-date with evolving tools and best practices.</p>
              </li>
              <li>
                <p>Worked independently to manage project timelines and deliverables, maintaining high-quality production standards while meeting deadlines.</p>
              </li>
            </ul>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Container;

import Card from "./Card";
import styles from "./profile.module.css";

const Container = () => {
  return (
    <div className={styles.profile_container}>
      <Card isLeft={true}>
        <img className={styles.profile_img} src={"../../../public/Screenshot 2025-04-22 142535.png"}></img>
        <h2 className={styles.profile_heading}>Software Developer</h2>
        <p>
          Full-stack web developer and instructor specializing in JavaScript, Python, and modern frameworks like Next.js and Django. I build scalable applications, lead development teams, and create technical content focused on clean code, great UX,
          and real-world problem-solving.
        </p>
      </Card>
      <Card isLeft={false}></Card>
      <Card isLeft={true}></Card>
    </div>
  );
};

export default Container;

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          As a passionate and skilled full stack software engineer, I am excited
          to bring my diverse background to solving today's toughest challenges.
          With experience in real estate, technology sales, and management, I
          have developed a unique skill set that allows me to excel in a variety
          of contexts.
        </p>
        <p>
          My technical skills include expertise in several programming
          languages, databases, and frameworks, including JavaScript, React,
          Node.js, MySQL, and MongoDB. I have worked on a range of projects,
          from developing front-end interfaces to designing and implementing
          back-end systems. One project I am particularly proud of is
          StackageApp; a Full Stack React-native project where I was part of an
          8 member team of software engineers that designed and built a
          user-moderated social media application for sharing science/technology
          related content.
        </p>
        <p>
          As a problem-solver, I thrive in challenging situations and enjoy
          finding creative solutions to complex problems. In my previous roles,
          I was able to use my problem-solving abilities to overcome obstacles
          and deliver results. For example, when I was working in Global
          Business Development, I was tasked with increasing revenue in a
          challenging market. By analyzing data, developing new strategies, and
          collaborating with my team, we were able to deploy new strategies for
          lead engagement and platform sales. My experience as a real estate
          agent and manager has also taught me valuable skills that are relevant
          to software engineering. As a successful agent, I developed strong
          communication and negotiation skills, which have proved invaluable
          when working with clients and stakeholders. As a manager, I was
          responsible for leading and motivating a team that I hired, which has
          helped me to develop excellent leadership and mentoring skills.
        </p>
        <p>
          I am excited about the opportunity to bring my skills and experience
          to a full stack software engineering role and make a meaningful
          contribution to a team. Please feel free to contact me if you would
          like to discuss any potential mutual fits with your current
          project/hiring needs.
        </p>
      </section>
    </Layout>
  );
}

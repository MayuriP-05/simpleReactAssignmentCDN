const MyReactApp = () => {
  return (
    <div>
      <h1>Learn web Development</h1>
      <div class="container">
        <p>
          The best first step to becoming a Web Developer is to start learning
          web development fundamentals, including an understanding of HTML
          (Hypertext Markup Language), CSS (Cascading Style Sheets), and
          JavaScript.
        </p>
        <p>
          Many aspiring Web Developers are now using
          <a href="#"> coding bootcamps </a> to fast-track the learning process.
          Coding bootcamps have thrived because they are short, immersive, and
          focused on outcomes and employment – their goal is to develop
          job-ready skills as efficiently as possible, making them an
          increasingly worthwhile investment for a would-be Web Developer.
          According to the job site Indeed, four out of five companies in the
          U.S. have hired a graduate from a coding bootcamp.
        </p>
        <p>
          In fact, the practical advantages of coding bootcamps are only getting
          clearer over time. For one thing, the field of web development
          naturally attracts people from all other fields, many of them making
          mid-career transitions – people for whom a clear and efficient path to
          skills expansion is a top priority. Further, employers increasingly
          value skills and experience over education, placing anyone who can
          prove their abilities on more equal footing with Developers holding a
          college degree.
        </p>
        <p>
          As you continue to grow your skills, you’ll need to choose an area of
          specialization. But what are the types of web development? All Web
          Developers are categorized into three main types:
        </p>
        <ul>
          <li>
            <b>Front-End Developer: </b>A Front-End Developer works on the
            “client-side” of web development, meaning any portion of the site or
            app that users interact with. This can include a site’s layout,
            design, and the way users interact with it.
          </li>
          <br></br>
          <li>
            <b>Back-End Developer:</b> A Back-End Developer works on the
            “server-side” of web development. This is focused on the way a site
            functions and can include databases, servers, networks and hosting,
            and more.
          </li>
          <br></br>
          <li>
            <b>Full-Stack Developer:</b> A Full-Stack Developer is familiar with
            both front-and back-end development and works with both sides of a
            website.
          </li>
        </ul>
      </div>
    </div>
  );
};

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);
root.render(<MyReactApp />);

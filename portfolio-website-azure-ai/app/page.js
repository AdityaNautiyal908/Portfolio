"use client"
import {useState } from "react";
import Image from "next/image";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    }
  return (
      <>
            <header>
              <a href="#" class="logo-holder">
                  <div class="logo">A</div>
                  <div class="logo-text">Portfolio Website</div>
              </a>
              <nav>
                  <ul id="menu" className={menuOpen ? "active" : ""}>
                      <li><a href="#">Home</a></li>
                      <li><a href="#skills">Skills</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="mailto:nautiyaladitya7@gmail.com" class="button">Contact Me</a> </li>
                  </ul>
                  <a href="#" class="mobile-toggle" onClick={toggleMobileMenu}>
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
                      </svg>
                  </a>
              </nav>
          </header>
          <main>
              <section className="hero container">
                  <div className="hero-blue">
                      <div>
                          <h1><small>Hi I'm</small>
                              Aditya Nautiyal
                          </h1>
                          <p>
                              Design and Developer from India
                              <span>I'm interested in AI topics which is why 
                                  I also add things like ChatGPT into my
                                  project.
                              </span>
                          </p>
                          <div className="call-to-action">
                              <a href="./Aditya Resume.pdf" className="button black">
                                  View Resume
                              </a>
                              <a href="mailto:nautiyaladity7@gmail.com" className="button white">
                                  Contact Me
                              </a>
                          </div>
                          <div className="socal-links">
                              <a href="https://github.com/AdityaNautiyal908">
                                  <img src="images/github.png" alt="Git Hub" width="48px"/>
                              </a>
                              <a href="https://surl.li/snzfmy">
                                  <img src="images/linkedin.png" alt="Linkedin" width="48px"/>
                              </a>
                          </div>
                      </div>
                  </div>
                      <div className="hero-yellow">
                          <img src="images/aditya.png" alt="Aditya Nautiyal" title="Aditya Nautiyal" width="100%"/>
                      </div>
              </section>
              <section className="logos container">
                  <div className="marquee">
                      <div className="track">
                          <img src="/images/html.png" alt="HTML" width="128"/>
                          <img src="/images/css.png" alt="CSS" width="128"/>
                          <img src="/images/javascript.png" alt="JS" width="128"/>
                          <img src="/images/figma.jpg" alt="Figma" width="128"/>
                          <img src="/images/Cpp.png" alt="C++" width="128"/>
                          <img src="/images/linux.png" alt="Linux" width="128"/>
                          <img src="/images/java.png" alt="Java" width="128"/>
                          <img src="/images/vscode.png" alt="VS Code" width="128"/>
                          <img src="/images/python.png" alt="Python" width="128"/>
                          <img src="/images/chatgpt.png" alt="ChatGPT" width="128"/>
                          <img src="/images/sql.png" alt="SQL" width="128"/>
                          <img src="/images/bootstrap.png" alt="Bootstrap" width="128"/>
                          <img src="/images/github.png" alt="Git hub" width="128"/>
                          <img src="/images/html.png" alt="HTML" width="128"/>
                          <img src="/images/css.png" alt="CSS" width="128"/>
                          <img src="/images/javascript.png" alt="JS" width="128"/>
                          <img src="/images/figma.jpg" alt="Figma" width="128"/>
                          <img src="/images/Cpp.png" alt="C++" width="128"/>
                          <img src="/images/linux.png" alt="Linux" width="128"/>
                          <img src="/images/java.png" alt="Java" width="128"/>
                          <img src="/images/vscode.png" alt="VS Code" width="128"/>
                          <img src="/images/python.png" alt="Python" width="128"/>
                          <img src="/images/chatgpt.png" alt="ChatGPT" width="128"/>
                          <img src="/images/sql.png" alt="SQL" width="128"/>
                          <img src="/images/bootstrap.png" alt="Bootstrap" width="128"/>
                          <img src="/images/github.png" alt="Git hub" width="128"/>
                      </div>
                  </div>
              </section>
              <section id="skills" className="skills container">
                  <h2>
                      <small>About Me</small>
                      Skills
                  </h2>
                  <div className="holder-blue">
                      <div className="left-column">
                          <h3>Frontend</h3>
                          <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JavaScript</li>
                          </ul>
                          <h3>Backend</h3>
                          <ul>
                              <li>Python</li>
                              <li>SQL</li>
                              <li>Django</li>
                              <li>Java</li>
                          </ul>
                      </div>
                      <div className="right-column">
                          <h3>A bit about me</h3>
                          <p>Hi I'm Aditya Nautiyal, a developer 
                              from India. I'm interested in AI topics 
                              which is why I also add things like ChatGPT 
                              into my project. I'm also love to read Books.
                          </p>
                      </div>
                  </div>
              </section>
              <section className="work-experience container">
                  <h2>
                      <small>Semester</small>
                      Projects
                  </h2>
                  <div className="jobs">
                      <article>
                          <figure>
                              <div>
                                  <img src="images/1.jpg" alt="1 - Semester" width="100%"/>
                                  <figcaption>1 - Semester</figcaption>
                              </div>
                          </figure>
                          <h3>Student Management System</h3>
                          <div>6 month</div>
                          <p>In My first semester I made a Student Management System
                              using <u>C</u>. This project was made for my college
                              project. And Help me to understand the basic of <u>Coding</u>.
                          </p>
                      </article>
                      <article>
                          <figure>
                              <div>
                                  <img src="images/2.jpg" alt="2 - Semester" width="100%"/>
                                  <figcaption>2 - Semester</figcaption>
                              </div>
                          </figure>
                          <h3>Rent and Sell Management System</h3>
                          <div>6 month</div>
                          <p>In My first semester I made a Rent and Sell Management System
                              using <u>Cpp</u>. This project was made for my college
                              project. And Help me to understand the <u>Object</u> and <u>classNamees</u> in Cpp.
                          </p>
                      </article>
                      <article>
                          <figure>
                              <div>
                                  <img src="images/workplace-3.jpg" alt="3 - Semester" width="100%"/>
                                  <figcaption>3 - Semester</figcaption>
                              </div>
                          </figure>
                          <h3>Flappy Bird Game</h3>
                          <div>6 month</div>
                          <p>This is project Helps me to understand the <u>Game Development</u>
                              using <u>Python</u>. This project was made for my college
                              project.
                          </p>
                      </article>
                  </div>
              </section>
              <section id="projects" className="bento container">
                  <h2>
                      <small>Previous</small>
                      Completed Projects
                  </h2>
                  <div className="bento-grid">
                      <a href="#" className="bento-item">
                          <img src="images/Pokemon.png" alt="Pokemon Website" title="Pokemon Go" width="100%"/>
                      </a>
                      <a href="#" className="bento-item">
                          <img src="images/netflix.png" alt="Netflix" title="Netflix" width="100%"/>
                      </a>
                      <a href="#" className="bento-item">
                          <img src="images/amazon.png" alt="Amazon" title="Amazon" width="100%"/>
                      </a>
                      <a href="#" className="bento-item">
                          <img src="images/grid.png" alt="Grid Project" title="Grid Layout" width="100%"/>
                      </a>
                      <a href="#" className="bento-item">
                          <img src="images/card_game.png" alt="Python Card Game" title="Python Card Game" width="100%"/>
                      </a>
                      <a href="#" className="bento-item">
                          <img src="images/State game.png" alt="State Guessing Game" title="State Guessing Game"  width="100%"/>
                      </a>
                  </div>
              </section>
              <section className="chatbot container">
                  <h2>
                      <small>
                          Talk to me
                      </small>
                      Chatbot
                  </h2>
                  <div className="chatbot-blue">
                      <div className="chat-info">
                          <h3>Azure AI Chatbot</h3>
                          <p>I've put together a chatbot
                              here which knowns all my skills,
                              and has a copy of my resume. You can use 
                              it to ask questions about me to get 
                              a better idea of who I am and what I've 
                              done.
                          </p>
                          <p>You can also download my resume here if you want
                              to take a look at it. I'm currently looking for 
                              new opportunities so if you have a project you think
                              I'd be a good fit for, please get in touch!
                          </p>
                          <a href="./Aditya Resume.pdf" className="button black">Download Resume</a>
                      </div>
                      <div className="chat-box">
                          <div className="scroll-area">
                              <ul id="chat-log">
                                  <li>
                                      <span className="avatar bot">AI</span>
                                      <div className="message">
                                          Hi, I'm a friendly chatbot that
                                          lets you interactive with this 
                                          portfolio. How can I help?
                                      </div>
                                  </li>
                                  <li>
                                      <span className="avatar user">User</span>
                                      <div className="message">
                                          I have a question to ask 
                                          you about this resume
                                      </div>
                                  </li>
                                  
                              </ul>
                          </div>
                          <div className="chat-message">
                              <input type="text" placeholder="Hey Aditya, what skills are you best at?"/>
                              <button className="button black">Send</button>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
    </>
  );
}

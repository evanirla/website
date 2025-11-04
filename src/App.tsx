import { useCallback } from 'react';
import { Box, Divider, IconButton, Link, Typography, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const print = useCallback(() => {
    window.print();
  }, []);

  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", padding: "10px 20px", margin: "auto", maxWidth: theme.breakpoints.values.md }}>
      <header style={{ display: 'flex' }}>
        <Box>
          <Typography variant='h6'>
            Evan Irla
          </Typography>
          <Typography>
            Full-Stack Software Engineer
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}></Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton className="no-print" aria-label="LinkedIn" href="https://www.linkedin.com/in/evan-irla/">
            <LinkedInIcon fontSize='large'/> 
          </IconButton>
          <IconButton className="no-print" aria-label="GitHub" href="https://github.com/evanirla">
            <GitHubIcon fontSize='large'/>
          </IconButton>
        </Box>
      </header>
      <Divider sx={{margin: "20px 0 15px 0"}}></Divider>
      <main style={{ flex: 1, overflowY: "scroll" }}>
        <section>
          <Typography>
            I am a seasoned, full-stack software engineer located in Edmonton, Alberta, Canada, working professionally since 2015.
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>Competencies</Typography>
          <Typography>
            <small>These are some of the things I'm paid for.</small>
            <ul>
              <li>Design (UI/UX)</li>
              <li>Mentoring</li>
              <li>Team Leadership</li>
              <li>Documentation</li>
              <li>Research / Prototyping</li>
              <li>DevOps Automation</li>
            </ul>
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>Programming Languages</Typography>
          <Typography>
            <small>These are the programming languages I use almost daily.</small>
            <ul>
              <li>Python</li>
              <li>C#</li>
              <li>Javascript / Typescript</li>
              <li>Oracle PL/SQL</li>
            </ul>
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>Technologies</Typography>
          <Typography>
            <small>These are the technologies I leverage across the stack.</small>
            <ul>
              <li>.NET (Web API, Xamarin/MAUI, etc.)</li>
              <li>Oracle Database</li>
              <li>React</li>
              <li>ArcGIS JavaScript API</li>
              <li>Azure DevOps (Pipelines)</li>
              <li>Atlassian Bitbucket (Pipelines)</li>
              <li>Sphinx (Documentation)</li>
            </ul>
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>Certifications</Typography>
          <Typography>
            <small>These are the the things that other people say I'm good at.</small>
            <ul>
              <li><Link href="https://pythoninstitute.org/pcap">Associate Python Programmer (PCAP)</Link></li>
              <li><Link href="https://www.cjisonline.com/">CJIS Online</Link></li>
            </ul>
          </Typography>
        </section>
        {/*<section>
          <Typography variant='h5'>Interests</Typography>
          <Typography>
            <small>These are the skills that I'd like to keep improving.</small>
            <ul>
              <li>System Architecture</li>
              <li>Requirements Analysis and Design</li>
              <li>Team Leadership</li>
              <li>Technical Writing</li>
              <li>CI/CD Integration</li>
              <li>Data Analysis</li>
            </ul>
          </Typography>
        </section>*/}
        <section>
          <Typography variant='h5'>Experience</Typography>
          <Typography>
            <small>These are the projects I've been a part of in the last couple of years, in reverse chronological order.</small>
          </Typography>
          <Typography variant='h6'>Code Name: KitchenSink [Jul 2025 - Present]</Typography>
          <Typography>
            <p>
              Planned and organized an upgrade to our base COTS products to the next maintainance release of
              the company's software platform, as well as bringing in enhancements and bug fixes that were implemented by
              a number of external teams. This involved defining a detailed project plan with estimates and defining
              project risks with mitigation strategies. After project kick-off, my role was largely focused on leading
              the design and development effort and facilitating coordination between my team and the other teams
              involved to ensure that timelines and quality standards were being met.
            </p>
          </Typography>
          <Typography variant='h6'>Product Support Rotation [May 2025 - Jul 2025]</Typography>
          <Typography>
            <p>
              Spent a few months on a support rotation working with the product support team to help triage and resolve
              reported issues. This involved many meeting with clients and company staff to determine the root cause of issues
              across our entire COTS product suite.
            </p>
          </Typography>
          <Typography variant='h6'>Code Name: Skybridge [Mar 2025 - May 2025]</Typography>
          <Typography>
            <p>
              Tech Stack: .NET Framework (C#), .NET 8, OpenText Brava/Blazon
            </p>
            <p>
              Led the technical planning of moving one of our SaaS products to new Azure infrastructure to improve service reliability.
              This involved performing the migration in a staging environment, identifying and resolving issues, and then creating a detailed migration plan for the production environment.
              I was also heavily involved in post-migration monitoring and issue resolution to ensure a smooth transition with minimal downtime for our users.
            </p>
            <p>
              The latter half of this project overlapped with my product support rotation, where I was able to leverage my experience with
              our SaaS offering to quickly address any issues that popped up.
            </p>
          </Typography>
          <Typography variant='h6'>Code Name: GreatValue [Oct 2024 - Mar 2025]</Typography>
          <Typography>
            <p>
              I helped ramp-up a new technical lead on our team before playing a supporting role as lead developer over a team of 3.
              Halfway through the project, I had to take over the technical lead responsibilities for a month due to unforeseen circumstances.
              This partially involved a pivot in the project plan to crunch the timeline to meet a hard deadline. 
            </p>
          </Typography>
          <Typography variant='h6'>Code Name: Lasso [Jan 2024 - Oct 2024]</Typography>
          <Typography>
            <p>
              Design System: Figma + Calcite
            </p>
            <p>
              Tech Stack: .NET (C#), React + TypeScript + Calcite, Esri ArcGIS Maps SDK for JavaScript, Oracle Database, Python
            </p>
            <p>
              I served as the lead UX designer and developer on a team of 6, building a new map-centric COTS product for managing inspections/investigations across
              municipal or state level governments.
            </p>
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>About Me</Typography>
          <Typography>
            <p>
              In 2015, I graduated from the <strong>Computer Engineering Technology</strong> program at the <strong>Northern Alberta Institute of Technology</strong>.
              During the summer I worked on migrating a loss appraisal and adjustment system to Microsoft Dynamics CRM.
              In the fall, I began a new Software Developer position at <strong>Computronix</strong> on a team building and maintaining the online licensing systems for the B.C. government.
              Since then, I've been a part of many successful government contracts and have spent the last 7 years engineering and building internal COTS (commercial off-the-shelf) products used by many of our clients.
            </p>
            <p>
              I've played a key role in building and maintaining large software solutions for the past 10 years and have built a broad set of skills across many technologies and communications.
              I am a trusted senior resource on the teams that I help lead, providing input into decisions based on my experience and industry knowledge.
            </p>
            <p>
              When I'm not in the office, I'm usually found renovating a 1958 bungalow, playing a round at my local golf club, or trying desparately to draw to the button at my local curling club.
            </p>
          </Typography>
        </section>
      </main>
      <footer className="no-print" style={{ display: 'flex', flexDirection: "column" }}>
        <Typography sx={{ textAlign: "center" }}>
          <span>&copy; {(new Date()).getFullYear()} - Evan Irla</span>
        </Typography>
        <Link href="#" onClick={print} className="no-print" sx={{ textAlign: "center" }}>
          <Typography variant='body2'>Print Portfolio</Typography>
        </Link>
      </footer>
    </Box>
  );
}

export default App;

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
              <li>.NET (Web API, Xamarin, etc.)</li>
              <li>Oracle Database</li>
              <li>React</li>
              <li>ArcGIS JavaScript API</li>
              <li>Azure DevOps (Pipelines)</li>
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
        <section>
          <Typography variant='h5'>Interests</Typography>
          <Typography>
          <small>These are the the things that I'd like to get better at.</small>
            <ul>
              <li>System Architecture</li>
              <li>Team Leadership</li>
              <li>Technical Writing</li>
              <li>CI/CD Integration</li>
              <li>Data Analysis</li>
            </ul>
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>About Me</Typography>
          <Typography>
            <p>
              In 2015, I graduated from the <strong>Computer Engineering Technology</strong> program at the <strong>Northern Alberta Institute of Technology</strong>.
              During the summer I worked on migrating a loss appraisal and adjustment system to Microsoft Dynamics CRM.
              In the fall, I began a new Software Developer position at <strong>Computronix</strong> on a team building and maintaining the online licensing systems for the B.C. government.
              Since then, I've been a part of many successful government contracts and have spent the last 5 years working on internal COTS (commercial off-the-shelf) products used by many Client Services teams.
            </p>
            <p>
              I've been working in information systems for the past 9 years and have built a broad set of skills across technologies and communications.
              I am a trusted senior resource on the teams that I work with, providing input into decisions based on my experience and industry knowledge.
            </p>
            <p>
              When I'm not in the office, I'm renovating a 1958 bungalow or playing a round at my local golf club.
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

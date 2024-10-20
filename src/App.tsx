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
            I am a seasoned, full-stack software developer located in Edmonton, Alberta, Canada, working professionally since 2015.
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>Current Competencies</Typography>
            <Typography>
              <ul>
                <li>Design</li>
                <li>Mentoring</li>
                <li>Documentation</li>
                <li>Research / Prototyping</li>
                <li>DevOps Automation</li>
              </ul>
          </Typography>
        </section>
        <section>
          <Typography variant='h5'>Current Languages</Typography>
          <Typography>
            <ul>
              <li>Python (PCAP Certification)</li>
              <li>C#</li>
              <li>Javascript / Typescript</li>
              <li>Oracle PL/SQL</li>
            </ul>
          </Typography>
        </section>
        <section>
        <Typography variant='h5'>Current Technologies</Typography>
        <Typography>
          <ul>
            <li>.NET (Web API)</li>
            <li>Oracle Database</li>
            <li>React</li>
            <li>ArcGIS JavaScript API</li>
            <li>Azure DevOps (Pipelines)</li>
            <li>Sphinx (Documentation)</li>
          </ul>
        </Typography>
        </section>
        <section>
          <Typography variant='h5'>About Me</Typography>
          <Typography>
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

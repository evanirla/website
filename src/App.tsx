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
            Software Technologist
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
            <li>React + Material UI</li>
            <li>ArcGIS JavaScript API</li>
            <li>Azure DevOps (Pipelines)</li>
            <li>Sphinx (Documentation)</li>
          </ul>
        </Typography>
        </section>
        <section>
          <Typography variant='h5'>My Story</Typography>
          <Typography>
            At the age of 13, I began working as a customer service clerk in a small rural town.
            During this time, I learned to take pride and ownership in my work, no matter what it was; something that has stuck with me to this day.
            In 2013, I moved to Edmonton, Alberta, to study Computer Engineering Technology at NAIT.
            Graduating in the spring of 2015, I began working as a software developer for a company developing an internal management system using Microsoft Dynamics CRM.
            At the end of 2015, I was hired by a company building licensing and permitting solutions for government clients.
            Since then, I have grown into a trusted, senior resource for the teams that I've been a part of.
          </Typography>
          <br/>
          <Typography>
            I now have a partner studying in the United Kingdom and have started the search for a new and exciting opportunity that will allow me to spend more time with her.
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

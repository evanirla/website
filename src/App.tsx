import { useCallback } from 'react';
import { Box, Divider, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const print = useCallback(() => {
    window.print();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box", padding: "10px 20px" }}>
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
        <Typography>
          I am a seasoned, full-stack software developer located in Edmonton, Alberta, Canada, working professionally since 2015.
        </Typography>
        <br/>
        <Typography variant='h5'>Current Languages</Typography>
        <Typography>
          <ul>
            <li>Python (PCAP Certification)</li>
            <li>C#</li>
            <li>Javascript / Typescript</li>
            <li>Oracle PL/SQL</li>
          </ul>
        </Typography>
        <Typography variant='h5'>Current Technologies</Typography>
        <Typography>
          <ul>
            <li>.NET (Web API)</li>
            <li>React + Material UI</li>
            <li>ArcGIS JavaScript API</li>
            <li>Azure DevOps (Pipelines)</li>
            <li>Sphinx (Documentation)</li>
          </ul>
        </Typography>
        <Typography variant='h5'>My Story</Typography>
        <Typography>
          At the age of 13, I began working as a customer service in a small rural town.
          I developed a passion for taking pride and ownership in my work, no matter what it was; something that has stuck with me to this day.
          In 2013, I moved to Edmonton, Alberta, to study Computer Engineering Technology at NAIT.
          Graduating in the spring of 2015, I began working as a software developer for a company developing an internal management system using Microsoft Dynamics CRM.
          During this time, I maintained a connection with a colleague I met at NAIT, who worked for a company building licensing and permitting solutions for government clients.
          Through this, I landed a career that has helped me grow into a trusted, senior resource for the teams that I am a part of.
          <br/><br/>
          I now have a partner studying in the United Kingdom and have started the search for a new and exciting opportunity that will allow me to spend more time with her.
        </Typography>
      </main>
      <footer className="no-print">
        <Typography sx={{ textAlign: "center" }}>
          <span>&copy; {(new Date()).getFullYear()} - Evan Irla</span>
        </Typography>
        <Link href="#" onClick={print} className="no-print" sx={{position: "absolute", bottom: 0, right: 0, padding: "10px"}}>
          <Typography>Print Portfolio</Typography>
        </Link>
      </footer>
    </Box>
  );
}

export default App;

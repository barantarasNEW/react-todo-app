import {StyledFooter} from "./Styles";
import {Container, IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <Link
          to={process.env.REACT_APP_GITHUB_URL || ''}
          target="_blank"
        >
          <IconButton>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>

        <Link
          to={process.env.REACT_APP_TELEGRAM_URL || ''}
          target="_blank"
        >
          <IconButton>
            <TelegramIcon fontSize="large"  />
          </IconButton>
        </Link>

        <Link
          to={process.env.REACT_APP_LINKEDIN_URL || ''}
          target="_blank"
        >
          <IconButton>
            <LinkedInIcon fontSize="large"  />
          </IconButton>
        </Link>
      </StyledFooter>
    </Container>
  );
};

export default Footer;

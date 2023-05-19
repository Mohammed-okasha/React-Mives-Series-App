import Container from "../UI/Layouts/Container";
import Logo from "../Header/Logo";

function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="row">
          <Logo />
          <div className="copyright">
            made by <span>mohammed sherif</span> &copy; 2023
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

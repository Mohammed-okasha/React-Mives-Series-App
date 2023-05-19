import Container from "./Container";

const DiscoverRoot = (props) => {
  return (
    <section className="discover_root">
      <Container>{props.children}</Container>
    </section>
  );
};

export default DiscoverRoot;

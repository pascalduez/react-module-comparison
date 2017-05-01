
module Header = {
  include ReactRe.Component;

  let name = "Header";

  type props = {
    title: string,
  };

  let render {props: { title }} =>
    <header
      role="banner"
    >
      <h1>
        (ReactRe.stringToElement title)
      </h1>
    </header>
};

include ReactRe.CreateComponent Header;

let createElement ::title => wrapProps { title };

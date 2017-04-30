
module Button = {
  include ReactRe.Component;

  let name = "Button";

  type theme =
    | Primary
    | Secondary
    | Danger;

  type props = {
    theme,
    label: string,
  };

  let getClassName theme => switch (theme) {
    | Primary => "theme-primary"
    | Secondary => "theme-secondary"
    | Danger => "theme-danger"
  };

  let handleClick _ _ => {
    Js.log "clicked!";
    None
  };

  let render {props: { label, theme }, updater} =>
    <button
      className=(getClassName theme)
      onClick=(updater handleClick)
    >
      (ReactRe.stringToElement label)
    </button>;
};

include ReactRe.CreateComponent Button;

let createElement ::theme ::label => wrapProps { theme, label };

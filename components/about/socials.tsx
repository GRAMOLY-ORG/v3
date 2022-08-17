import * as icons from "react-feather";

export type IconName = keyof typeof icons;
export type IconProps = {
  name: IconName;
  color?: string;
  size?: string | number;
};

export const Icons = ({ name, ...rest }: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent {...rest} />;
};

//  linkedin

interface link {
  lnkdn?: string;
}

export const Linkedin = (props: link) => {
  return (
    <a
      className="opacity-70 hover:opacity-100"
      href={`https://linkedin.com/in/${props.lnkdn}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons name="Linkedin" size="15" color="#022b3a" />
    </a>
  );
};

//  twitter

interface twitter {
  twtr?: string;
}

export const Twitter = (props: twitter) => {
  return (
    <a
      className="opacity-70 hover:opacity-100 "
      href={`https://twitter.com/${props.twtr}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons name="Twitter" size="15" color="#022b3a" />
    </a>
  );
};

// instagram

interface instagram {
  insta?: string;
}

export const Instagram = (props: instagram) => {
  return (
    <a
      className="opacity-70 hover:opacity-100  "
      href={`https://instgram.com/${props.insta}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons name="Instagram" size="15" color="#022b3a" />
    </a>
  );
};

// github

interface github {
  gh?: string;
}

export const Github = (props: github) => {
  return (
    <a
      className="opacity-70 hover:opacity-100 "
      href={`https://github.com/${props.gh}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons name="GitHub" size="15" color="#022b3a" />
    </a>
  );
};

//  site
interface globe {
  site?: string;
}

export const Globe = (props: globe) => {
  return (
    <a
      className="opacity-70 hover:opacity-100 "
      href={`${props.site}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons name="Globe" size="15" color="#022b3a" />
    </a>
  );
};

// YouTube

interface youtube {
  yt?: string;
}

export const Youtube = (props: youtube) => {
  return (
    <a
      className="opacity-70 hover:opacity-100 "
      href={`https://youtube.com/c/${props.yt}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons name="Youtube" size="15" color="#022b3a" />
    </a>
  );
};
